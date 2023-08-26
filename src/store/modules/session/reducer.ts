import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  session: null
};

export default function sessions(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@session/LOAD': {
        draft.loading = true;
        break;
      }
      case '@session/FEED': {
        draft.session = null;
        draft.loading = true;
        break;
      }
      case '@session/LOAD_SUCCESS': {
        draft.loading = false;
        draft.session = action.payload.session;
        break;
      }
      default:
        return state;
    }
  });
}
