import produce from "immer";

const INITIAL_STATE = {
    isLoading: false,
    sessions: [],
    session: null
};

export default function personal(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@sessions/LOAD": {
                draft.isLoading = true;
                break;
            }
            case "@sessions/LOAD_FAILED": {
                draft.isLoading = false;
                break;
            }
            case "@sessions/LOAD_SUCCESS": {
                draft.sessions = action.payload.sessions;
                draft.isLoading = false;
                break;
            }
            case "@sessions/INDEX": {
                draft.isLoading = true;
                break;
            }
            case "@sessions/INDEX_FAILED": {
                draft.isLoading = false;
                break;
            }
            case "@sessions/INDEX_SUCCESS": {
                draft.session = action.payload.session;
                draft.isLoading = false;
                break;
            }
            default:
                return state;
        }
    });
}