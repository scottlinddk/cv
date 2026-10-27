import Anthropic from '@anthropic-ai/sdk';
import { JobFetchError, fetchJobPosting } from './_lib/fetchJobPosting.js';
import { SYSTEM_PROMPT, buildUserMessage } from './_lib/prompt.js';

const MODEL = process.env.ANTHROPIC_MODEL ?? 'claude-haiku-5-5';
const MAX_CANDIDATE_CHARS = 12_000;

function json(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: { 'cache-control': 'no-store' } });
}

const fail = (status: number, error: string, message: string) => json({ error, message }, status);

interface DraftRequest {
  url?: unknown;
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
    if (typeof body?.url !== 'string' || typeof body.candidate !== 'string') {
      return fail(400, 'invalid_request', 'Send { url, candidate } as strings.');
    }
    if (!body.candidate.trim() || body.candidate.length > MAX_CANDIDATE_CHARS) {
      return fail(400, 'invalid_request', 'The candidate profile is empty or too long.');
    }

    let jobPosting: string;
    try {
      jobPosting = await fetchJobPosting(body.url.trim());
    } catch (error) {
      if (error instanceof JobFetchError) return fail(422, error.code, error.message);
      throw error;
    }

    try {
      const message = await new Anthropic({ apiKey }).messages.create({
        model: MODEL,
        max_tokens: 1200,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: buildUserMessage(body.candidate, jobPosting) }],
      });
      const draft = message.content
        .map((block) => (block.type === 'text' ? block.text : ''))
        .join('')
        .trim();
      if (!draft) return fail(502, 'empty_draft', 'The model returned no text.');
      return json({ draft });
    } catch (error) {
      console.error('draft generation failed', error);
      return fail(502, 'model_error', 'The draft could not be generated. Try again shortly.');
    }
  },
};
