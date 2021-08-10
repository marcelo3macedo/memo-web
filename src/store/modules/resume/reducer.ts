import produce from "immer";

const INITIAL_STATE = {
    decks: [],
    lastSession: null
};

export default function personal(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@resume/LOAD_SUCCESS": {
                draft.decks = action.payload.data.decks;
                draft.lastSession = action.payload.data.lastSession;
                break;
            }     
            default:
                return state;
        }
    });
}