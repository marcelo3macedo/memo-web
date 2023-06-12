import produce from 'immer';

const INITIAL_STATE = {
  list: [],
  index: null,
  isLoading: false,
};

export default function personal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@integration/LOAD': {
        draft.isLoading = true;
        break;
      }
      case '@integration/LOAD_SUCCESS': {
        draft.list = action.payload.data;
        draft.isLoading = false;
        break;
      }
      case '@integration/INDEX_SUCCESS': {
        draft.index = action.payload.data;
        break;
      }
      default:
        return state;
    }
  });
}
