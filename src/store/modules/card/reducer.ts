import produce from 'immer';

const INITIAL_STATE = {
  cards: []
};

export default function sessions(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@card/LOAD_SUCCESS': {
        draft.cards = action.payload.cards;
        break;
      }
      case '@card/SAVE_SUCCESS': {
        draft.cards.unshift(action.payload.card);
        break;
      }
      case '@card/UPDATE_SUCCESS': {
        const { card } = action.payload;
        const index = draft.cards.findIndex((obj: any) => obj.id === card?.id);

        if (index >= 0) {
          draft.cards[index] = card;
        }
        break;
      }
      case '@card/REMOVE_SUCCESS': {
        draft.cards = draft.cards.filter(
          (c: any) => c.id !== action.payload.card.id
        );
        break;
      }
      default:
        return state;
    }
  });
}
