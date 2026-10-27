import { useCallback, useRef, useState } from 'react';
import { buildCandidateProfile } from './buildCandidateProfile';
import { DraftError, requestDraft } from './draftApi';

export type DraftState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'done'; draft: string }
  | { status: 'error'; code: string; message: string };

export function useApplicationDraft() {
  const [state, setState] = useState<DraftState>({ status: 'idle' });
  const latest = useRef(0);

  const generate = useCallback(async (url: string, accessCode?: string) => {
    const id = ++latest.current;
    setState({ status: 'loading' });
    try {
      const draft = await requestDraft({ url, candidate: buildCandidateProfile(), accessCode });
      if (id === latest.current) setState({ status: 'done', draft });
    } catch (error) {
      if (id !== latest.current) return;
      const known = error instanceof DraftError;
      setState({
        status: 'error',
        code: known ? error.code : 'unknown',
        message: known ? error.message : 'Something went wrong.',
      });
    }
  }, []);

  return { state, generate };
}
