import produce from "immer";

const INITIAL_STATE = {
    transactions: []
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@transaction/LOAD_SUCCESS": {
                draft.transactions = action.payload.transactions;
                break;
            }
            default:
                return state;
        }
    });
}