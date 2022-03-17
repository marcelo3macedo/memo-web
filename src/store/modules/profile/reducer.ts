import produce from "immer";

const INITIAL_STATE = {
    profile: null,
    isLoading: false
};

export default function personal(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@profile/LOAD": {
                draft.isLoading = true;
                break;
            }
            case "@profile/LOAD_SUCCESS": {
                draft.profile = action.payload.profile;
                draft.isLoading = false;
                break;
            }
            case "@profile/LOAD_FAILURE": {
                draft.isLoading = false;
                break;
            }
            case "@profile/UPDATE": {
                draft.isLoading = true;
                draft.profile.name = action.payload.name;
                break;
            }
            case "@profile/UPDATE_SUCCESS": {
                draft.isLoading = false;
                break;
            }
            case "@profile/UPDATE_FAILURE": {
                draft.isLoading = false;
                break;
            }
            default:
                return state;
        }
    });
}