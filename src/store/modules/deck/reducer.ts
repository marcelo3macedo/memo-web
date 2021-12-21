import produce from "immer";

const INITIAL_STATE = {
    deck: null
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@deck/OPEN_SUCCESS" : {
                draft.deck = action.payload.deck;
                break;
            }
            case "@deck/ADD_CARD" : {
                draft.deck.cards.push(action.payload.card);
                break;
            }
            case "@deck/SAVE_SUCCESS": {
                action.payload.deck.cards = [];
                draft.deck = action.payload.deck;                
                break;
            }
            case "@deck/UPDATE_CARD": {
                draft.deck.cards = draft.deck.cards.filter(c => c.id !== action.payload.card.id);
                draft.deck.cards.push(action.payload.card);
                break;
            }
            case "@deck/DELETE_CARD": {
                draft.deck.cards = draft.deck.cards.filter(c => c.id !== action.payload.card.id);                
                break;
            }
            default:
                return state;
        }
    });
}