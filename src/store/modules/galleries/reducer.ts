import produce from 'immer';

const INITIAL_STATE = {
  actualPage: 0,
  pages: 0,
  total: 0,
  results: [],
  loading: false,
  loadingMore: false,
  search: ''
};

export default function sessions(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@galleries/LOAD': {
        draft.loading = true;
        draft.search = '';
        break;
      }
      case '@galleries/LOAD_MORE': {
        draft.actualPage = action.payload.page;
        draft.loadingMore = true;
        break;
      }
      case '@galleries/LOAD_SUCCESS': {
        draft.pages = action.payload.pages;
        draft.total = action.payload.total;
        draft.results = action.payload.results;
        draft.loading = false;
        break;
      }
      case '@galleries/LOAD_MORE_SUCCESS': {
        draft.results = Object.assign([], draft.results).concat(
          action.payload.results
        );
        draft.loadingMore = false;
        break;
      }
      case '@galleries/SEARCH': {
        draft.search = action.payload.value;
        draft.loading = true;
        break;
      }
      default:
        return state;
    }
  });
}
