import produce from "immer";

const INITIAL_STATE = {
    actualPath: "/"
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@navigate/PUSH": {
                draft.actualPath = action.path;
                break;
            }
            case "@navigate/BACK_ACTION": {
                draft.actualPath = "/";
                break;
            }  
            default:
                return state;
        }
    });
}