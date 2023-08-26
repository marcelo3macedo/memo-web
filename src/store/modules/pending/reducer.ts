import produce from 'immer';

const INITIAL_STATE = {
  actualPage: 1,
  pages: 0,
  total: 0,
  results: [],
  loading: false
};

export default function sessions(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pending/LOAD': {
        draft.loading = true;
        break;
      }
      case '@pending/LOAD_SUCCESS': {
        draft.actualPage = 1;
        draft.pages = action.payload.pages;
        draft.total = action.payload.total;
        draft.results = action.payload.results;
        draft.loading = false;
        break;
      }
      case '@pending/LOAD_MORE_SUCCESS': {
        draft.actualPage = action.payload.actualPage + 1;
        draft.pages = action.payload.pages;
        draft.total = action.payload.total;
        draft.results = Object.assign([], draft.results).concat(
          action.payload.results
        );
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
