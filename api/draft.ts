import Anthropic from '@anthropic-ai/sdk';
import { JobFetchError, MAX_TEXT_CHARS, fetchJobPosting } from './_lib/fetchJobPosting.js';
import { parseDraft } from './_lib/parseDraft.js';
import { SYSTEM_PROMPT, buildUserMessage } from './_lib/prompt.js';

const MODEL = process.env.ANTHROPIC_MODEL ?? 'claude-haiku-5-5';
const MAX_CANDIDATE_CHARS = 12_000;
const MIN_PASTED_CHARS = 50;

function json(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: { 'cache-control': 'no-store' } });
}

const fail = (status: number, error: string, message: string) => json({ error, message }, status);

interface DraftRequest {
  /** The posting is either fetched from `url` or supplied directly as `text`. */
  url?: unknown;
  text?: unknown;
  candidate?: unknown;
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') return fail(405, 'method_not_allowed', 'Use POST.');

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return fail(500, 'not_configured', 'ANTHROPIC_API_KEY is not set on the server.');

    // The endpoint spends API credit and fetches arbitrary URLs, so it can be locked behind a code.
    const accessCode = process.env.DRAFT_ACCESS_CODE;
    if (accessCode && request.headers.get('x-access-code') !== accessCode) {
      return fail(401, 'unauthorized', 'A valid access code is required.');
    }

    const body = (await request.json().catch(() => null)) as DraftRequest | null;
    const hasUrl = typeof body?.url === 'string';
    const hasText = typeof body?.text === 'string';
    if (typeof body?.candidate !== 'string' || hasUrl === hasText) {
      return fail(400, 'invalid_request', 'Send { candidate } and exactly one of { url, text }.');
    }
    if (!body.candidate.trim() || body.candidate.length > MAX_CANDIDATE_CHARS) {
      return fail(400, 'invalid_request', 'The candidate profile is empty or too long.');
    }

    let jobPosting: string;
    if (hasText) {
      jobPosting = (body.text as string).trim().slice(0, MAX_TEXT_CHARS);
      if (jobPosting.length < MIN_PASTED_CHARS) {
        return fail(400, 'invalid_request', 'The pasted job posting is too short.');
      }
    } else {
      try {
        jobPosting = await fetchJobPosting((body.url as string).trim());
      } catch (error) {
        if (error instanceof JobFetchError) return fail(422, error.code, error.message);
        throw error;
      }
    }

    try {
      const message = await new Anthropic({ apiKey }).messages.create({
        model: MODEL,
        max_tokens: 1200,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: buildUserMessage(body.candidate, jobPosting) }],
      });
      const { headline, draft } = parseDraft(
        message.content.map((block) => (block.type === 'text' ? block.text : '')).join(''),
      );
      if (!draft) return fail(502, 'empty_draft', 'The model returned no text.');
      return json({ draft, headline });
    } catch (error) {
      console.error('draft generation failed', error);
      return fail(502, 'model_error', 'The draft could not be generated. Try again shortly.');
    }
  },
};
