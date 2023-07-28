export function loadAction({ session, card }: any) {
  return {
    type: '@review/LOAD',
    payload: {
      session,
      card
    }
  };
}
export function loadSuccess({ options }: any) {
  return {
    type: '@review/LOAD_SUCCESS',
    payload: {
      options
    }
  };
}
export function optionSelectAction({ id }: any) {
  return {
    type: '@review/OPTION_SELECT',
    payload: {
      id
    }
  };
}
export function updateCardAction({ card }: any) {
  return {
    type: '@review/UPDATE_CARD',
    payload: {
      card
    }
  };
}
export function finishAction() {
  return {
    type: '@review/FINISH'
  };
}
