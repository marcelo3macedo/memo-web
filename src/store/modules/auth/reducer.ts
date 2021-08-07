import produce from "immer";

const INITIAL_STATE = {
    signed: false,
    name: null,
    email: null
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@auth/SIGN_IN_SUCCESS": {
                draft.signed = true;
                draft.name = action.payload.name;
                draft.email = action.payload.email;
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