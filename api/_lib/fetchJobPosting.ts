import { lookup } from 'node:dns/promises';
import { htmlToText } from './htmlToText.js';
import { isPublicIp } from './ip.js';

const MAX_REDIRECTS = 3;
const MAX_BYTES = 2_000_000;
export const MAX_TEXT_CHARS = 24_000;
const TIMEOUT_MS = 10_000;

export class JobFetchError extends Error {
  constructor(
    readonly code: 'invalid_url' | 'blocked_url' | 'fetch_failed' | 'not_html' | 'empty_page',
    message: string,
  ) {
    super(message);
  }
}

/** Accepts only http(s) URLs whose host resolves exclusively to public addresses. */
async function assertPublicUrl(raw: string): Promise<URL> {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new JobFetchError('invalid_url', 'That is not a valid web address.');
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new JobFetchError('invalid_url', 'Only http and https addresses are supported.');
  }
  const host = url.hostname.replace(/^\[|\]$/g, '');
  const addresses = await lookup(host, { all: true }).catch(() => []);
  if (addresses.length === 0) {
    throw new JobFetchError('fetch_failed', 'The address could not be resolved.');
  }
  if (!addresses.every(({ address }) => isPublicIp(address))) {
    throw new JobFetchError('blocked_url', 'That address is not allowed.');
  }
  return url;
}

async function readCapped(response: Response): Promise<string> {
  const reader = response.body?.getReader();
  if (!reader) return '';
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (total < MAX_BYTES) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    total += value.byteLength;
  }
  await reader.cancel().catch(() => undefined);
  return Buffer.concat(chunks).toString('utf8');
}

/** Fetches a job posting and returns its readable text, capped to a model-friendly length. */
export async function fetchJobPosting(rawUrl: string): Promise<string> {
  let url = await assertPublicUrl(rawUrl);

  for (let hop = 0; ; hop++) {
    const response = await fetch(url, {
      redirect: 'manual',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        accept: 'text/html,application/xhtml+xml',
        'user-agent': 'Mozilla/5.0 (compatible; cv-application-drafter)',
      },
    }).catch(() => {
      throw new JobFetchError('fetch_failed', 'The job posting could not be reached.');
    });

    const location = response.headers.get('location');
    if (response.status >= 300 && response.status < 400 && location) {
      if (hop >= MAX_REDIRECTS) {
        throw new JobFetchError('fetch_failed', 'The address redirects too many times.');
      }
      // Every hop is re-validated, otherwise a public URL could redirect into the private network.
      url = await assertPublicUrl(new URL(location, url).toString());
      continue;
    }

    if (!response.ok) {
      throw new JobFetchError(
        'fetch_failed',
        `The job site answered with status ${response.status}. Some sites block automated access.`,
      );
    }
    const type = response.headers.get('content-type') ?? '';
    if (!/text\/html|application\/xhtml\+xml|text\/plain/i.test(type)) {
      throw new JobFetchError('not_html', 'The address does not point to a web page.');
    }

    const text = htmlToText(await readCapped(response));
    if (text.length < 200) {
      throw new JobFetchError(
        'empty_page',
        'No readable job text was found. The page is probably rendered in the browser or behind a login.',
      );
    }
    return text.slice(0, MAX_TEXT_CHARS);
  }
}
