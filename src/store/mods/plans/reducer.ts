import produce from 'immer';

const INITIAL_STATE = {
  plans: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plans/LOAD_SUCCESS': {
        draft.plans = action.payload.plans;
        break;
      }
      default:
        return state;
    }
  });
}
