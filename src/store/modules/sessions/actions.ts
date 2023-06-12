export function loadAction(search = null) {
  return {
    type: '@sessions/LOAD',
    payload: {
      search,
    },
  };
}
export function loadSuccessAction({ sessions }) {
  return {
    type: '@sessions/LOAD_SUCCESS',
    payload: {
      sessions,
    },
  };
}
export function loadFailedAction() {
  return {
    type: '@sessions/LOAD_FAILED',
  };
}
export function searchAction({ term }) {
  return {
    type: '@sessions/SEARCH',
    payload: {
      term,
    },
  };
}
export function indexAction({ id }) {
  return {
    type: '@sessions/INDEX',
    payload: {
      id,
    },
  };
}
export function indexSuccessAction({ session }) {
  return {
    type: '@sessions/INDEX_SUCCESS',
    payload: {
      session,
    },
  };
}
export function indexFailedAction() {
  return {
    type: '@sessions/INDEX_FAILED',
  };
}
