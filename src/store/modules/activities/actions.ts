export function loadAction({ slug }: any) {
  return {
    type: '@activities/LOAD',
    payload: {
      slug
    }
  };
}

export function loadActionSuccess({ name, description, levels }: any) {
  return {
    type: '@activities/LOAD_SUCCESS',
    payload: {
      name,
      description,
      levels
    }
  };
}

export function loadActionFailed() {
  return {
    type: '@activities/LOAD_FAILED'
  };
}

export function startAction({ slug, level }: any) {
  return {
    type: '@activities/START',
    payload: {
      slug,
      level
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

export function getScoreAction({ slug }: any) {
  return {
    type: '@activities/GET_SCORE',
    payload: {
      slug
    }
  };
}

export function getScoreSuccessAction({ scores }: any) {
  return {
    type: '@activities/GET_SCORE_SUCCESS',
    payload: {
      scores
    }
  };
}
