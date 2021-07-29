import produce from "immer";

const INITIAL_STATE = {
    menu: false,
    search: false
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@menu/MENU_ACTION": {
                draft.menu = !draft.menu;
                break;
            }     
            case "@menu/SEARCH_ACTION": {
                draft.search = !draft.search;
                break;
            }     
            default:
                return state;
        }
    });
}