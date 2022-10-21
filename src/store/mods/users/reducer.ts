import produce from "immer";

const INITIAL_STATE = {
    isLoading: false,
    lastSession: null,
    sessions: [],
    featuredDecks: [],
    decks: []
};

export default function personal(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@users/LOAD": {
                draft.isLoading = true;
                break;
            }
            case "@users/LOAD_FAILED": {
                draft.isLoading = false;
                break;
            }
            case "@users/LOAD_SUCCESS": {
                draft.sessions = action.payload.sessions;
                draft.lastSession = action.payload.lastSession;
                draft.featuredDecks = action.payload.featuredDecks;
                draft.isLoading = false;
                break;
            }
            default:
                return state;
        }
    });
}