export function loadAction() {
  return {
    type: '@galleries/LOAD'
  };
}

export function loadMoreAction({ page }: any) {
  return {
    type: '@galleries/LOAD_MORE',
    payload: {
      page
    }
  };
}

export function loadMoreSuccessAction({ results }: any) {
  return {
    type: '@galleries/LOAD_MORE_SUCCESS',
    payload: {
      results
    }
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
