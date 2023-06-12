export function loadAction() {
  return {
    type: '@history/LOAD',
  };
}
export function loadActionSuccess({ data }) {
  return {
    type: '@history/LOAD_SUCCESS',
    payload: {
      data,
    },
  };
}
export function loadFailedAction() {
  return {
    type: '@history/LOAD_FAILED',
  };
}
export function loadMoreAction() {
  return {
    type: '@history/LOAD_MORE',
  };
}
export function loadMoreActionSuccess({ data, actualPage }) {
  return {
    type: '@history/LOAD_MORE_SUCCESS',
    payload: {
      data,
      actualPage,
    },
  };
}
