export function loadAction() {
  return {
    type: '@frequency/LOAD'
  };
}
export function loadSuccess({ frequencies }: any) {
  return {
    type: '@frequency/LOAD_SUCCESS',
    payload: {
      frequencies
    }
  };
}
