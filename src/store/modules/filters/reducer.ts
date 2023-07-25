import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  filters: null
};

export default function sessions(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@filters/LOAD': {
        draft.loading = true;
        draft.filters = null;
        break;
      }
      case '@filters/LOAD_SUCCESS': {
        draft.loading = false;
        draft.filters = action.payload.filters;
        break;
      }
      default:
        return state;
    }
  });
}
