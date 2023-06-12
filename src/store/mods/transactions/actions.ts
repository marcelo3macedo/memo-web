export function loadAction() {
  return {
    type: '@transaction/LOAD',
  };
}

export function loadSuccess({ transactions }) {
  return {
    type: '@transaction/LOAD_SUCCESS',
    payload: {
      transactions,
    },
  };
}
