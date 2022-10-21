import produce from "immer";

const INITIAL_STATE = {
    url: null
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@redirect/SET_REDIRECTURL": {
                draft.url = action.payload.url;
                break;
            }
            case "@redirect/REDIRECT_SUCCESS": {
                draft.url = null;
                break;
            }
            default:
                return state;
        }
    });
}
