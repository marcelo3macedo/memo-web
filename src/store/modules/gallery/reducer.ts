import produce from "immer";

const INITIAL_STATE = {
    decks: []
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@gallery/LOAD_SUCCESS" : {
                draft.decks = action.payload.data;
                break;
            }
            default:
                return state;
        }
    });
}