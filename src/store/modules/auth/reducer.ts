import produce from "immer";

const INITIAL_STATE = {
    signed: false,
    name: null,
    email: null,
    validation: {
        visible: false,
        type: null
    }
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@auth/SIGN_IN": {
                draft.validation.visible = false;
                break;
            }
            case "@auth/SIGN_IN_FAILURE": {
                draft.validation.visible = true;
                draft.validation.type = action.payload.type;
                break;
            }
            case "@auth/SIGN_IN_SUCCESS": {
                draft.signed = true;
                draft.name = action.payload.name;
                draft.email = action.payload.email;
                break;
            }
            case "@auth/CLOSE_ALERT": {
                draft.validation.visible = false;
                break;
            }
            case "@auth/LOGOUT" : {
                draft.signed = false;
                draft.name = null;
                draft.email = null;
                break;
            }
            default:
                return state;
        }
    });
}