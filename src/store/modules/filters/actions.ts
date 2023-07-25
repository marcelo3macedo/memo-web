export function loadAction() {
  return {
    type: '@filters/LOAD'
  };
}

export function loadSuccessAction({ filters }: any) {
  return {
    type: '@filters/LOAD_SUCCESS',
    payload: {
      filters
    }
  };
}
