export type DraftErrorCode = 'unauthorized' | 'network' | 'unknown' | (string & {});

export class DraftError extends Error {
  constructor(
    readonly code: DraftErrorCode,
    message: string,
  ) {
    super(message);
  }
}

interface DraftInput {
  url: string;
  candidate: string;
  accessCode?: string;
}

/** Calls the /api/draft serverless function, which holds the Anthropic key. */
export async function requestDraft({ url, candidate, accessCode }: DraftInput): Promise<string> {
  let response: Response;
  try {
    response = await fetch('/api/draft', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(accessCode ? { 'x-access-code': accessCode } : {}),
      },
      body: JSON.stringify({ url, candidate }),
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
