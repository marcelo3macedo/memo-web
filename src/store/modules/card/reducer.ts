import produce from "immer";

const INITIAL_STATE = {
    card: {}
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}