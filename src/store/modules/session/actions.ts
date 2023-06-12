export function openAction({ sessionId }) {
  return {
    type: '@session/OPEN',
    payload: {
      sessionId,
    },
  };
}
export function openSuccessAction({ session }) {
  return {
    type: '@session/OPEN_SUCCESS',
    payload: {
      session,
    },
  };
}
export function openDeckSuccessAction({ session }) {
  return {
    type: '@session/OPEN_DECK_SUCCESS',
    payload: {
      session,
    },
  };
}
export function reviewAction() {
  return {
    type: '@session/REVIEW',
  };
}
export function optionAction({ option }) {
  return {
    type: '@session/OPTION',
    payload: {
      option,
    },
  };
}
export function optionActionSuccess() {
  return {
    type: '@session/OPTION_SUCCESS',
  };
}
