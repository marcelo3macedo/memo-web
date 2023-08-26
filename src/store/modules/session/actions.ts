import {
  SessionLoadProps,
  SessionLoadSuccessProps
} from '@interfaces/store/SessionProps';

export function loadAction({ id }: SessionLoadProps) {
  return {
    type: '@session/LOAD',
    payload: { id }
  };
}

export function loadSuccessAction({ session }: SessionLoadSuccessProps) {
  return {
    type: '@session/LOAD_SUCCESS',
    payload: {
      session
    }
  };
}

export function feedAction({ deckId }: any) {
  return {
    type: '@session/FEED',
    payload: {
      deckId
    }
  };
}
