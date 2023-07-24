export function loadAction() {
  return {
    type: '@featuredUser/LOAD'
  };
}

export function loadSuccessAction({ featuredDecks, numberOfSessions }: any) {
  return {
    type: '@featuredUser/LOAD_SUCCESS',
    payload: {
      featuredDecks,
      numberOfSessions
    }
  };
}

export function loadFailedAction() {
  return {
    type: '@featuredUser/LOAD_FAILED'
  };
}
