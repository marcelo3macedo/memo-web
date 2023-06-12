export function initAction() {
  return {
    type: '@decks_edit/INIT',
  };
}

export function setTargetAction({ target }) {
  return {
    type: '@decks_edit/SET_TARGET',
    payload: {
      target,
    },
  };
}
