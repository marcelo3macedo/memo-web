import produce from 'immer';

const INITIAL_STATE = {
  all: [],
  selected: null,
};

export default function personal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@theme/LOAD_SUCCESS': {
        draft.all = action.payload.themes;
        break;
      }
      case '@theme/SELECT_ACTION': {
        draft.selected = action.payload.themeId;
        break;
      }
      default:
        return state;
    }
  });
}
