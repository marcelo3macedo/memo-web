export function setInvalidAction({ message }) {
  return {
    type: '@validation/SET_INVALID',
    payload: { message },
  };
}

export function clearAction() {
  return {
    type: '@validation/CLEAR',
  };
}
