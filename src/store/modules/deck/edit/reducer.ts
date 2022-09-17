import produce from "immer";

const INITIAL_STATE = {
    show: false,
    target: null
};

export default function edit(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@decks_edit/INIT": {
                draft.show = false;
                draft.target = null;
                break;
            }
            case "@decks_edit/SET_TARGET": {
                draft.show = true;
                draft.target = action.payload.target;
                break;
            }
            default:
                return state;
        }
    });
}