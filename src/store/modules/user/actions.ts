export function loadAction() {
  return {
    type: '@user/LOAD',
  };
}
export function loadSuccessAction({ lastSession, sessions, featuredDecks }) {
  return {
    type: '@user/LOAD_SUCCESS',
    payload: {
      lastSession,
      sessions,
      featuredDecks,
    },
  };
}
export function loadFailedAction() {
  return {
    type: '@user/LOAD_FAILED',
  };
}
