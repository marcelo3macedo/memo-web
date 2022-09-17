import produce from "immer";

const INITIAL_STATE = {
    deck: null
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@decks_open/LOAD_SUCCESS" : {
                draft.deck = action.payload.deck;
                break;
            }
            default:
                return state;
        }
    });
}