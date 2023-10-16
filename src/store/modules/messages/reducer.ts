import produce from 'immer';

const INITIAL_STATE = {
  target: '',
  category: '',
  activeIndex: 0,
  sessions: null
};

export default function activities(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@messages/START': {
        draft.category = action.payload.category;
        draft.target = action.payload.slug;
        draft.activeIndex = 0;
        break;
      }
      case '@messages/CREATE_SUCCESS': {
        draft.sessions = action.payload.session;
        break;
      }
      case '@messages/NEXT': {
        draft.activeIndex = draft.activeIndex + 1;
        break;
      }
      case '@messages/PREVIOUS': {
        draft.activeIndex = draft.activeIndex - 1;
        break;
      }
      default:
        return state;
    }
  });
}
