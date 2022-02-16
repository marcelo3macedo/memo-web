import produce from "immer";

const INITIAL_STATE = {
    decks: [],
    lastSession: null,
    showDelete: false,
    deck: null
};

export default function personal(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@personal/LOAD_DECKS_SUCCESS": {
                draft.decks = action.payload.decks;
                break;
            }
            case "@personal/REMOVE_MODAL": {
                draft.showDelete = action.payload.visible;

                if (action.payload.deck) {
                    draft.deck = action.payload.deck;
                }
                break;
            }
            case "@personal/REMOVE_DECK": {
                draft.showDelete = false;
                break;
            }
            case "@personal/EDIT_SUCCESS": {
                draft.deck = action.payload.deck;
                break;
            }
            default:
                return state;
        }
    });
}