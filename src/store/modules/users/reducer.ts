import produce from 'immer';

const INITIAL_STATE = {
  sessions: [],
  featuredDecks: [],
  loading: false,
  checkTutorial: true
};

export default function personal(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@users/LOAD': {
        draft.loading = true;
        break;
      }
      case '@users/LOAD_SUCCESS': {
        draft.loading = false;
        draft.sessions = action.payload.sessions;
        draft.featuredDecks = action.payload.featuredDecks;
        break;
      }
      case '@users/CHECK_TUTORIAL': {
        draft.checkTutorial = false;
        break;
      }
      default:
        return state;
    }
  });
}
