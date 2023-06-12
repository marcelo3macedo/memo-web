import produce from 'immer';

const INITIAL_STATE = {
  card: {},
  modal: null,
};

export default function navigate(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@card/OPEN_MODAL': {
        draft.modal = action.payload.modal;
        break;
      }
      case '@card/REMOVE': {
        draft.modal = 'remove-card';
        draft.card = action.payload.card;
        break;
      }
      case '@card/CONFIRM_REMOVE': {
        draft.modal = null;
        break;
      }
      case '@card/EDIT': {
        draft.modal = 'edit-card';
        draft.card = action.payload.card;
        break;
      }
      case '@card/CONFIRM_EDIT': {
        draft.modal = null;
        draft.card = action.payload.card;
        break;
      }
      case '@card/SAVE': {
        draft.modal = null;
        break;
      }
      default:
        return state;
    }
  });
}
