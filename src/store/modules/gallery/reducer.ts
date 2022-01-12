import produce from "immer";

const INITIAL_STATE = {
    decks: [],
    page: 0,
    visible: true
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@gallery/LOAD" : {
                draft.page = 0;
                draft.decks = [];
                draft.visible = true;
                break;
            }
            case "@gallery/LOAD_MORE": {
                draft.page = draft.page + 1;
                break;
            }
            case "@gallery/LOAD_SUCCESS" : {
                if (action.payload.data.length === 0) {
                    draft.visible = false;
                    return
                }

                draft.decks = draft.decks.concat(action.payload.data);
                break;
            }
            default:
                return state;
        }
    });
}