import produce from 'immer';

const INITIAL_STATE = {
  progress: null,
  loading: false
};

export default function progress(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@progress/LOAD': {
        draft.loading = true;
        break;
      }
      case '@progress/LOAD_SUCCESS': {
        draft.progress = action.payload.progress;
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
