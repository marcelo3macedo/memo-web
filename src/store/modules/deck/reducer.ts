import produce from "immer";

const INITIAL_STATE = {
    deck: {}
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}