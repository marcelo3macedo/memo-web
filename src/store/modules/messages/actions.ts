export function startAction({ category, slug }: any) {
  return {
    type: '@messages/START',
    payload: {
      category,
      slug
    }
  };
}

export function createActionSuccess({ session }: any) {
  return {
    type: '@messages/CREATE_SUCCESS',
    payload: {
      session
    }
  };
}

export function backAction() {
  return {
    type: '@messages/BACK'
  };
}

export function selectOptionAction({ option, answer }: any) {
  return {
    type: '@messages/SELECT_OPTION',
    payload: {
      option,
      answer
    }
  };
}

export function selectSuccessAction({ isCorrect }: any) {
  return {
    type: '@messages/SELECT_SUCCESS',
    payload: {
      isCorrect
    }
  };
}

export function nextAction() {
  return {
    type: '@messages/NEXT'
  };
}

export function previousAction() {
  return {
    type: '@messages/PREVIOUS'
  };
}
