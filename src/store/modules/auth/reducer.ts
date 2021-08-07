import produce from "immer";

const INITIAL_STATE = {
    signed: false,
    name: 'Marcelo',
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}