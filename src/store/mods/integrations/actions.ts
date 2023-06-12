export function loadAction({ type }) {
  return {
    type: '@integration/LOAD',
    payload: {
      type,
    },
  };
}
export function loadActionSuccess({ data }) {
  return {
    type: '@integration/LOAD_SUCCESS',
    payload: {
      data,
    },
  };
}
export function indexAction({ type, id }) {
  return {
    type: '@integration/INDEX',
    payload: {
      type,
      id,
    },
  };
}
export function indexActionSuccess({ data }) {
  return {
    type: '@integration/INDEX_SUCCESS',
    payload: {
      data,
    },
  };
}
export function updateAction({ type, id }) {
  return {
    type: '@integration/UPDATE',
    payload: {
      type,
      id,
    },
  };
}
export function updateActionSuccess({ type }) {
  return {
    type: '@integration/UPDATE_SUCCESS',
    payload: {
      type,
    },
  };
}
