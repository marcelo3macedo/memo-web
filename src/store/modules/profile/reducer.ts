import produce from "immer";

const INITIAL_STATE = {
    profile: null
};

export default function personal(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@profile/LOAD_SUCCESS": {
                draft.profile = action.payload.data;
                break;
            }     
            default:
                return state;
        }
    });
}