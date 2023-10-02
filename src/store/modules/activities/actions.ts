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
