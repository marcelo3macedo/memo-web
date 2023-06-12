import produce from 'immer';

const INITIAL_STATE = {
  sessions: [],
  isLoading: false,
};

export default function personal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@history/LOAD': {
        draft.isLoading = true;
        break;
      }
      case '@history/LOAD_SUCCESS': {
        draft.sessions = action.payload.sessions;
        draft.isLoading = false;
        break;
      }
      case '@history/LOAD_FAILED': {
        draft.isLoading = false;
        break;
      }
      default:
        return state;
    }
  });
}
