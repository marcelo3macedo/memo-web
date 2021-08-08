import produce from "immer";

const INITIAL_STATE = {
    decks: [],
    lastSession: null
};

export default function personal(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@personal/LOAD_DECKS_SUCCESS": {
                draft.decks = action.payload.decks;
                break;
            }     
            default:
                return state;
        }
    });
}