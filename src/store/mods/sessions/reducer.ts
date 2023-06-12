import produce from 'immer';

const INITIAL_STATE = {
  isLoading: false,
  index: null,
  sessions: [],
  pages: 0,
  total: 0,
  actualPage: 0,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@sessions/LOAD_INDEX': {
        draft.index = null;
        draft.isLoading = true;
        break;
      }
      case '@sessions/LOAD_INDEX_SUCCESS': {
        draft.index = action.payload.session;
        draft.isLoading = false;
        break;
      }
      case '@sessions/LOAD_LIST': {
        draft.isLoading = true;
        draft.actualPage = 0;
        break;
      }
      case '@sessions/LOAD_LIST_SUCCESS': {
        draft.sessions = action.payload.data.results;
        draft.pages = action.payload.data.pages;
        draft.total = action.payload.data.total;
        draft.isLoading = false;
        break;
      }
      case '@sessions/UPDATE_LIST_SUCCESS': {
        draft.sessions = action.payload.sessions;
        break;
      }
      case '@sessions/LOAD_MORE_LIST_SUCCESS': {
        draft.sessions = action.payload.data;
        draft.actualPage = action.payload.actualPage;
        break;
      }
      default:
        return state;
    }
  });
}
