import produce from "immer";

const INITIAL_STATE = {
    isLoading: false,
    index: null,
    sessions: []
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@sessions/LOAD_INDEX": {
                draft.index = null;
                draft.isLoading = true;
                break;
            }
            case "@sessions/LOAD_INDEX_SUCCESS": {
                draft.index = action.payload.session;
                draft.isLoading = false;
                break;
            }            
            default:
                return state;
        }
    });
}