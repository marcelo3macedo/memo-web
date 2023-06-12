import produce from 'immer';

const INITIAL_STATE = {
  sessions: [],
  pages: 0,
  actualPage: 0,
  total: 0,
  isLoading: false,
};

export default function personal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@history/LOAD': {
        draft.isLoading = true;
        draft.actualPage = 0;
        break;
      }
      case '@history/LOAD_SUCCESS': {
        draft.sessions = action.payload.data.results;
        draft.pages = action.payload.data.pages;
        draft.total = action.payload.data.total;
        draft.isLoading = false;
        break;
      }
      case '@history/LOAD_FAILED': {
        draft.isLoading = false;
        break;
      }
      case '@history/LOAD_MORE_SUCCESS': {
        draft.sessions = action.payload.data;
        draft.actualPage = action.payload.actualPage;
        break;
      }
      default:
        return state;
    }
  });
}
