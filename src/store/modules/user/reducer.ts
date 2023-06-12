import produce from 'immer';

const INITIAL_STATE = {
  isLoading: false,
  lastSession: null,
  sessions: [],
  featuredDecks: [],
  decks: [],
};

export default function personal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/LOAD': {
        draft.isLoading = true;
        break;
      }
      case '@user/LOAD_FAILED': {
        draft.isLoading = false;
        break;
      }
      case '@user/LOAD_SUCCESS': {
        draft.sessions = action.payload.sessions;
        draft.lastSession = action.payload.lastSession;
        draft.featuredDecks = action.payload.featuredDecks;
        draft.isLoading = false;
        break;
      }
      default:
        return state;
    }
  });
}
