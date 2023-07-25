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
      case '@galleries/LOAD': {
        draft.loading = true;
        break;
      }
      case '@galleries/LOAD_SUCCESS': {
        draft.pages = action.payload.pages;
        draft.total = action.payload.total;
        draft.results = action.payload.results;
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
