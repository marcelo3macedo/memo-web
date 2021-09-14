import produce from "immer";

const INITIAL_STATE = {
    session: null,
    element: {
        cardPosition: 0,
        selectedCard: null,
        isFlipped: false,
        options: []
    },
    answered: []
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@session/OPEN_SUCCESS": {
                draft.session = action.payload.session;
                draft.element.options = action.payload.session.difficulties;
                break;
            } 
            case "@session/OPEN_DECK_SUCCESS": {
                draft.session = action.payload.session;
                draft.element.options = action.payload.session.difficulties;
                break;
            } 
            case "@session/REVIEW": {
                draft.element.cardPosition = 0;
                draft.element.isFlipped = false;
                draft.answered = [];
                if (draft.session && draft.session.cards && draft.session.cards.length > 0) {
                    draft.element.selectedCard = draft.session.cards[draft.element.cardPosition];                
                }                
                break;
            }
            case "@session/FLIP": {
                draft.element.isFlipped = !draft.element.isFlipped;
                break;
            }
            case "@session/OPTION": {
                if (draft.element.cardPosition >= draft.session.cards.length) {
                    return;
                }
                
                draft.element.isFlipped = false;
                draft.element.cardPosition++;

                let newCard = draft.element.selectedCard;
                newCard.difficultyId = action.payload.option.id;
                draft.answered.push(newCard);
                draft.element.selectedCard = draft.session.cards[draft.element.cardPosition];                
                break;
            }
            case "@session/OPTION_SUCCESS": {
                break;
            }
            default:
                return state;
        }
    });
}