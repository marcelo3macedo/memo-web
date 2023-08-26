import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  deck: null
};

export default function sessions(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deck/LOAD': {
        draft.loading = true;
        draft.deck = null;
        break;
      }
      case '@deck/LOAD_SUCCESS': {
        draft.loading = false;
        draft.deck = action.payload.deck;
        break;
      }
      case '@deck/EDIT': {
        draft.deck = action.payload;
        break;
      }
      default:
        return state;
    }
  });
}
