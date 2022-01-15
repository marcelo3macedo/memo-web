import produce from "immer";

const INITIAL_STATE = {
    showModal: false
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@validation/SHOW": {
                draft.showModal = true;
                break;
            }
            case "@validation/HIDE": {
                draft.showModal = false;
                break;
            }
            default:
                return state;
        }
    });
}