import produce from "immer";

const INITIAL_STATE = {
    decks: [],
    categories: [],
    featured: [],
    pages: 0,
    actualPage: 0,
    total: 0,
    isLoading: false,
    query: null
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@gallery/LOAD" : {
                draft.isLoading = true;
                draft.actualPage = 0;
                draft.decks = [];
                draft.categories = [];
                draft.featured = [];
                draft.query = null;
                break;
            }
            case "@gallery/QUERY" : {
                draft.isLoading = true;
                draft.actualPage = 0;
                draft.decks = [];
                draft.categories = [];
                draft.featured = [];
                draft.query = action.payload.query;
                break;
            }
            case "@gallery/LOAD_SUCCESS" : {
                draft.isLoading = false;
                draft.pages = action.payload.decks.pages; 
                draft.total = action.payload.decks.total; 
                draft.decks = draft.decks.concat(action.payload.decks.results);
                draft.categories = action.payload.categories;
                draft.featured = action.payload.featured;
                break;
            }
            case "@gallery/LOAD_FAILED": {
                draft.isLoading = false;
                break;
            }
            case "@gallery/LOAD_MORE_SUCCESS": {
                draft.decks = action.payload.data;
                draft.actualPage = action.payload.actualPage;
                break;
            }
            default:
                return state;
        }
    });
}