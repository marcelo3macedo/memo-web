import produce from "immer";

const INITIAL_STATE = {
    deck: null,
    frequency: [],
    themes: [],
    themeId: null,
    defaultFrequency: null
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@deck/OPEN_SUCCESS" : {
                draft.deck = action.payload.deck;
                break;
            }
            case "@deck/ADD_CARD" : {
                draft.deck.cards.push(action.payload.card);
                break;
            }
            case "@deck/SAVE_SUCCESS": {
                action.payload.deck.cards = [];
                draft.deck = action.payload.deck;                
                break;
            }
            case "@deck/UPDATE_CARD": {
                draft.deck.cards = draft.deck.cards.filter(c => c.id !== action.payload.card.id);
                draft.deck.cards.push(action.payload.card);
                break;
            }
            case "@deck/DELETE_CARD": {
                draft.deck.cards = draft.deck.cards.filter(c => c.id !== action.payload.card.id);                
                break;
            }
            case "@deck/NEWDECK_SUCCESS": {
                draft.frequency = action.payload.frequencies;
                draft.themes = action.payload.themes;                
                draft.themeId = (action.payload.themes && action.payload.themes.length > 0) ? action.payload.themes[0].id : null
                action.payload.frequencies.filter(c=> c.default === true).map(x=> ( draft.defaultFrequency = x.id ))                
                break;
            }
            case "@deck/CHANGE_THEMEID": {
                draft.themeId = action.payload.themeId;
                break;
            }
            default:
                return state;
        }
    });
}