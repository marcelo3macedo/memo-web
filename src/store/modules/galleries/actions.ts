export function loadAction() {
  return {
    type: '@galleries/LOAD'
  };
}

export function loadSuccessAction({ pages, total, results }: any) {
  return {
    type: '@galleries/LOAD_SUCCESS',
    payload: {
      pages,
      total,
      results
    }
  };
}

export function searchAction({ value }: any) {
  return {
    type: '@galleries/SEARCH',
    payload: {
      value
    }
  };
}
