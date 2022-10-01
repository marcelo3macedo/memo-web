import produce from "immer";

const INITIAL_STATE = {
    frequencies: []
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@options/LOAD_SUCCESS": {
                draft.frequencies = action.payload.frequencies;
                break;
            }
            default:
                return state;
        }
    });
}