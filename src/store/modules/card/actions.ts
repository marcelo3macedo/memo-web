export function loadAction({ id }: any) {
  return {
    type: '@card/LOAD',
    payload: { id }
  };
}

export function loadSuccessAction({ cards }: any) {
  return {
    type: '@card/LOAD_SUCCESS',
    payload: {
      cards
    }
  };
}

export function saveAction({ id, title, content, secretContent }: any) {
  return {
    type: '@card/SAVE',
    payload: { id, title, content, secretContent }
  };
}

export function saveSuccessAction({ card }: any) {
  return {
    type: '@card/SAVE_SUCCESS',
    payload: {
      card
    }
  };
}

export function updateAction({ id, title, content, secretContent }: any) {
  return {
    type: '@card/UPDATE',
    payload: { id, title, content, secretContent }
  };
}

export function updateSuccessAction({ card }: any) {
  return {
    type: '@card/UPDATE_SUCCESS',
    payload: {
      card
    }
  };
}

export function removeAction({ id }: any) {
  return {
    type: '@card/REMOVE',
    payload: { id }
  };
}

export function removeSuccessAction({ card }: any) {
  return {
    type: '@card/REMOVE_SUCCESS',
    payload: {
      card
    }
  };
}
