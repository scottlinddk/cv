export type DraftErrorCode = 'unauthorized' | 'network' | 'unknown' | (string & {});

export class DraftError extends Error {
  constructor(
    readonly code: DraftErrorCode,
    message: string,
  ) {
    super(message);
  }
}

/** Where the job posting comes from: a link the server fetches, or text the user pasted. */
export type PostingSource = { kind: 'url'; url: string } | { kind: 'text'; text: string };

interface DraftInput {
  source: PostingSource;
  candidate: string;
  accessCode?: string;
}

/** Calls the /api/draft serverless function, which holds the Anthropic key. */
export async function requestDraft({ source, candidate, accessCode }: DraftInput): Promise<string> {
  let response: Response;
  try {
    response = await fetch('/api/draft', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(accessCode ? { 'x-access-code': accessCode } : {}),
      },
      body: JSON.stringify({
        candidate,
        ...(source.kind === 'url' ? { url: source.url } : { text: source.text }),
      }),
    });
  } catch {
    throw new DraftError('network', 'Could not reach the server.');
  }

  const data = (await response.json().catch(() => null)) as {
    draft?: string;
    error?: string;
    message?: string;
  } | null;

  if (!response.ok || !data?.draft) {
    throw new DraftError(data?.error ?? 'unknown', data?.message ?? 'Something went wrong.');
  }
  return data.draft;
}
