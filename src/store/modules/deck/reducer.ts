import produce from 'immer';

const INITIAL_STATE = {
  deck: null,
  showDelete: false,
  loading: false,
  failure: false,
};

export default function navigate(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deck/EDIT': {
        draft.deck = action.payload.deck;
        break;
      }
      case '@deck/OPEN_SUCCESS': {
        draft.deck = action.payload.deck;
        break;
      }
      case '@deck/OPEN_PATH': {
        draft.loading = true;
        draft.failure = false;
        break;
      }
      case '@deck/OPEN_PATH_FAILURE': {
        draft.loading = false;
        draft.failure = true;
        break;
      }
      case '@deck/OPEN_PATH_SUCCESS': {
        draft.loading = false;
        draft.deck = action.payload.deck;
        break;
      }
      case '@deck/ADD_CARD_SUCCESS': {
        draft.deck.cards.push(action.payload.card);
        break;
      }
      case '@deck/SAVE_SUCCESS': {
        action.payload.deck.cards = [];
        draft.deck = action.payload.deck;
        break;
      }
      case '@deck/UPDATE_CARD_SUCCESS': {
        draft.deck.cards = draft.deck.cards.filter(
          c => c.id !== action.payload.card.id
        );
        draft.deck.cards.push(action.payload.card);
        break;
      }
      case '@deck/DELETE_CARD_SUCCESS': {
        draft.deck.cards = draft.deck.cards.filter(
          c => c.id !== action.payload.card.id
        );
        break;
      }
      default:
        return state;
    }
  });
}
