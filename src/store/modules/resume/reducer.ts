import produce from "immer";

const INITIAL_STATE = {
    sessions: [],
    lastSession: null,
    featuredDecks: []
};

export default function personal(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@resume/LOAD_SUCCESS": {
                draft.sessions = action.payload.data.sessions;
                draft.lastSession = action.payload.data.lastSession;
                draft.featuredDecks = action.payload.data.featuredDecks;
                break;
            }     
            default:
                return state;
        }
    });
}