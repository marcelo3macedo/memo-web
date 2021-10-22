import produce from "immer";

const INITIAL_STATE = { 
    categories: [],
    featured: [],
    decks: [],
    searchQuery: null
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@search/LOAD": {
                draft.searchQuery = null;
                break;
            }
            case "@search/LOAD_SUCCESS": {
                draft.categories = action.payload.search.categories;
                draft.featured = action.payload.search.featured;
                draft.decks = action.payload.search.decks;
                break;
            }
            case "@search/SEARCH_ACTION": {
                draft.searchQuery = action.payload.term;
                break;
            }     
            default:
                return state;
        }
    });
}