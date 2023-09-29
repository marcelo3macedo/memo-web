import produce from 'immer';

const INITIAL_STATE = {
  target: ''
};

export default function personal(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@activities/START': {
        draft.target = action.payload.slug;
        break;
      }
      default:
        return state;
    }
  });
}
