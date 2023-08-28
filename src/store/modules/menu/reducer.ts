import produce from 'immer';

const INITIAL_STATE = {
  active: false
};

export default function navigate(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@menu/ACTIVE': {
        draft.active = !draft.active;
        break;
      }
      default:
        return state;
    }
  });
}
