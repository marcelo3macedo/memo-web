import produce from 'immer';

const INITIAL_STATE = {
  all: [],
  default: null,
};

export default function personal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@frequencies/LOAD_SUCCESS': {
        const defaultFrequency = action.payload.frequencies.find(
          c => c.default
        );

        draft.all = action.payload.frequencies;
        draft.default = defaultFrequency;
        break;
      }
      default:
        return state;
    }
  });
}
