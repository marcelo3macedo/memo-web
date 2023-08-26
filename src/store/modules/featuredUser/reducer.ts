import produce from 'immer';

const INITIAL_STATE = {
  numberOfSessions: 0,
  featuredDecks: [],
  loading: false
};

export default function personal(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@featuredUser/LOAD': {
        draft.loading = true;
        break;
      }
      case '@featuredUser/LOAD_SUCCESS': {
        draft.featuredDecks = action.payload.featuredDecks;
        draft.numberOfSessions = action.payload.numberOfSessions;
        draft.loading = false;
        break;
      }
      case '@featuredUser/LOAD_FAILED': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
