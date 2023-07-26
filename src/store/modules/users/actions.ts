export function loadAction() {
  return {
    type: '@users/LOAD'
  };
}

export function loadSuccessAction({ sessions, featuredDecks }: any) {
  return {
    type: '@users/LOAD_SUCCESS',
    payload: {
      sessions,
      featuredDecks
    }
  };
}

export function checkTutorialAction() {
  return {
    type: '@users/CHECK_TUTORIAL'
  };
}

export function removeAction() {
  return {
    type: '@users/REMOVE'
  };
}
