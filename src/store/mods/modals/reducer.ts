import produce from "immer";

const INITIAL_STATE = {
    name: null
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@modal/OPEN": {
                draft.name = action.payload.name;
                break;
            }
            case "@modal/CLOSE": {
                draft.name = null;
                break;
            }
            default:
                return state;
        }
    });
}