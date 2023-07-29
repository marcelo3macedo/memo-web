export function loadAction() {
  return {
    type: '@pending/LOAD'
  };
}

export function loadSuccessAction({ pages, total, results }: any) {
  return {
    type: '@pending/LOAD_SUCCESS',
    payload: {
      pages,
      total,
      results
    }
  };
}

export function loadMoreAction({ page }: any) {
  return {
    type: '@pending/LOAD_MORE',
    payload: {
      page
    }
  };
}

export function loadMoreSuccessAction({
  actualPage,
  pages,
  total,
  results
}: any) {
  return {
    type: '@pending/LOAD_MORE_SUCCESS',
    payload: {
      actualPage,
      pages,
      total,
      results
    }
  };
}
