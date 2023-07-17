export function navigatePush({ route, path }) {
  return {
    type: '@navigate/PUSH',
    payload: {
      route,
      path
    }
  };
}

export function backAction() {
  return {
    type: '@navigate/BACK_ACTION'
  };
}
