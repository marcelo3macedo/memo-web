export function loadAction() {
  return {
    type: '@sessions/LOAD'
  };
}

export function loadSuccessAction({ pages, total, results }: any) {
  return {
    type: '@sessions/LOAD_SUCCESS',
    payload: {
      pages,
      total,
      results
    }
  };
}

export function loadMoreAction({ page }: any) {
  return {
    type: '@sessions/LOAD_MORE',
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
    type: '@sessions/LOAD_MORE_SUCCESS',
    payload: {
      actualPage,
      pages,
      total,
      results
    }
  };
}

export function searchAction({ value }: any) {
  return {
    type: '@sessions/SEARCH',
    payload: {
      value
    }
  };
}

export function indexAction({ id }: any) {
  return {
    type: '@sessions/INDEX',
    payload: {
      id
    }
  };
}

export function indexSuccessAction({ session }: any) {
  return {
    type: '@sessions/INDEX_SUCCESS',
    payload: {
      session
    }
  };
}
