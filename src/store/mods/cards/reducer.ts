import produce from "immer";

const INITIAL_STATE = {
    list: [],
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
            case "@cards/UPDATE_LIST": {
                draft.list = action.payload.list;
                break;
            }
            default:
                return state;
        }
    });
}