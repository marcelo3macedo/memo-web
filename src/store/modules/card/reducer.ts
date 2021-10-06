import produce from "immer";

const INITIAL_STATE = {
    card: {},
    showEditor: false,
    showCreator: false,
    showRemove: false
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {   
            case "@card/NEW": {
                draft.showCreator = true;
                break;
            }         
            case "@card/EDIT" : {
                draft.showEditor = true;
                draft.card = action.payload.card;
                break;
            }
            case "@card/REMOVE": {
                draft.showRemove = true;
                draft.card = action.payload.card;
                break;
            }
            case "@card/CLOSE_EDIT": {
                draft.showEditor = false;
                break;
            }
            case "@card/CLOSE_CREATE": {
                draft.showCreator = false;
                break;
            }
            case "@card/CLOSE_REMOVE": {
                draft.showRemove = false;
                break;
            }
            case "@card/SAVE": {
                draft.showCreator = false;
                break;
            }
            case "@card/SAVE_EDITION": {
                draft.showEditor = false;
                break;
            }
            case "@card/REMOVE_CARD": {
                draft.showRemove = false;
                break;
            }
            default:
                return state;
        }
    });
}