import produce from 'immer';

const INITIAL_STATE = {
  invalid: false,
  message: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@validation/SET_INVALID': {
        draft.invalid = true;
        draft.message = action.payload.message;
        break;
      }
      case '@validation/CLEAR': {
        draft.invalid = false;
        draft.message = null;
        break;
      }
      default:
        return state;
    }
  });
}
