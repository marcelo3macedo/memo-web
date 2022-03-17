import produce from "immer";

const INITIAL_STATE = {
    decks: [],
    categories: [],
    featured: [],
    page: 0,
    isLoading: true,
    hasMore: true,
    query: null
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@gallery/LOAD" : {
                draft.isLoading = true;
                draft.page = 0;
                draft.decks = [];
                draft.categories = [];
                draft.featured = [];
                draft.query = null;
                break;
            }
            case "@gallery/QUERY" : {
                draft.isLoading = true;
                draft.page = 0;
                draft.decks = [];
                draft.categories = [];
                draft.featured = [];
                draft.query = action.payload.query;
                break;
            }
            case "@gallery/LOAD_SUCCESS" : {
                draft.isLoading = false;
                draft.hasMore = action.payload.decks.length > 0; 
                draft.decks = draft.decks.concat(action.payload.decks);
                draft.categories = action.payload.categories;
                draft.featured = action.payload.featured;
                break;
            }
            case "@gallery/LOAD_FAILED": {
                draft.isLoading = false;
                break;
            }
            case "@gallery/LOAD_MORE": {
                draft.page = draft.page + 1;
                break;
            }
            default:
                return state;
        }
    });
}