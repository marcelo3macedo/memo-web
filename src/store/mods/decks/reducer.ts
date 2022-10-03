import produce from "immer";

const INITIAL_STATE = {
    selected: null
};

export default function decks(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@decks/ADD_SUBMIT_SUCCESS": {
                draft.selected = action.payload.deck;
                break;
            }
            case "@decks/EDIT_SUBMIT_SUCCESS": {
                draft.selected = action.payload.deck;
                break;
            }
            case "@decks/OPEN_SUCCESS": {
                draft.selected = action.payload.deck;
                break;
            }
            case "@decks/SET": {
                draft.selected = action.payload.deck;
                break;
            }
            case "@decks/REMOVE_SUBMIT_SUCCESS": {
                draft.selected = null;
                break;
            }
            default:
                return state;
        }
    });
}