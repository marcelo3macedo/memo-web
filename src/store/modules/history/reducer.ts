import produce from "immer";

const INITIAL_STATE = {
    history: null
};

export default function personal(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@history/LOAD_SUCCESS": {
                draft.history = action.payload.data;
                break;
            }     
            default:
                return state;
        }
    });
}