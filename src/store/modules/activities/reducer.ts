import produce from 'immer';

const INITIAL_STATE = {
  target: '',
  activeIndex: 0,
  sessions: null
};

export default function activities(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@activities/START': {
        draft.target = action.payload.slug;
        break;
      }
      case '@activities/CREATE_SUCCESS': {
        draft.sessions = action.payload.session;
        break;
      }
      default:
        return state;
    }
  });
}
