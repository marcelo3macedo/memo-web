import produce from "immer";

const INITIAL_STATE = {
    card: null
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@cards/EDIT": {
                draft.card = action.payload.card;
                break;
            }
            case "@cards/REMOVE": {
                draft.card = action.payload.card;
                break;
            }
            case "@cards/EDIT_SUBMIT_SUCCESS": {
                draft.card = null;
                break;
            }  
            default:
                return state;
        }
    });
}