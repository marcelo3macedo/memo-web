import produce from "immer";

const INITIAL_STATE = {
    isLoading: false,
    signed: false,
    user: null,
    redirectTo: null,
    activateStatus: null
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@auth/LOAD": {
                draft.isLoading = false;
                break;
            }
            case "@auth/SIGN_IN": {
                draft.isLoading = true;
                break;
            }
            case "@auth/SIGN_IN_SUCCESS": {
                draft.signed = true;
                draft.isLoading = false;
                draft.user = action.payload.user;
                break;
            }
            case "@auth/SIGN_IN_FAILURE": {
                draft.isLoading = false;
                break;
            }
            case "@auth/ACTIVATE": {
                draft.activateStatus = 'loading';
                break;
            }
            case "@auth/ACTIVATE_SUCCESS": {
                draft.activateStatus = 'success';
                break;
            }
            case "@auth/ACTIVATE_FAILED": {
                draft.activateStatus = 'failed';
                break;
            }
            default:
                return state;
        }
    });
}
