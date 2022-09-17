import produce from "immer";

const INITIAL_STATE = {
    show: false,
    target: {}
};

export default function remove(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@decks_remove/INIT": {
                draft.show = false;
                break;
            }
            case "@decks_remove/SET_TARGET": {
                draft.show = true;
                draft.target = action.payload.target;
                break;
            }
            case "@decks_remove/REMOVE": {
                draft.show = false;
                break;
            }
            case "@decks_remove/REMOVE_SUCCESS": {
                draft.show = false;
                break;
            }
            case "@decks_remove/REMOVE_FAILURE": {
                draft.show = false;
                break;
            }
            default:
                return state;
        }
    });
}