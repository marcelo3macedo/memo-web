export function loadAction() {
  return {
    type: '@progress/LOAD'
  };
}

export function loadSuccessAction({ progress }: any) {
  return {
    type: '@progress/LOAD_SUCCESS',
    payload: {
      progress
    }
  };
}
