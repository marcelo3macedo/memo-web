export function startAction({ slug }: any) {
  return {
    type: '@activities/START',
    payload: {
      slug
    }
  };
}

export function createActionSuccess({ session, type }: any) {
  return {
    type: '@activities/CREATE_SUCCESS',
    payload: {
      session,
      type
    }
  };
}

export function backAction() {
  return {
    type: '@activities/BACK'
  };
}

export function selectOptionAction({ option, answer }: any) {
  return {
    type: '@activities/SELECT_OPTION',
    payload: {
      option,
      answer
    }
  };
}

export function selectSuccessAction({ isCorrect }: any) {
  return {
    type: '@activities/SELECT_SUCCESS',
    payload: {
      isCorrect
    }
  };
}

export function nextAction() {
  return {
    type: '@activities/NEXT'
  };
}
