export function navigatePush({ path }) {
  return {
    type: '@navigate/PUSH',
    path,
  };
}

export function backAction() {
  return {
    type: '@navigate/BACK_ACTION',
  };
}
