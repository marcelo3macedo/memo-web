import produce from "immer";

const INITIAL_STATE = {
    isFlipped: false,
    cardPosition: 1,
    selectedCard: {
        content: "Qual a capital do brasil?",
        secretContent: "Brasilia"
    },
    cards: [
        {
            content: "Qual a capital do brasil?",
            secretContent: "Brasilia"
        },
        {
            content: "Qual a capital do EUA?",
            secretContent: "Washigton"
        }
    ],
    options: [
        {
            key: 1,
            value: "Fácil"
        },
        {
            key: 2,
            value: "Médio"
        },
        {
            key: 3,
            value: "Difícil"
        },
        {
            key: 4,
            value: "Não Lembro"
        }
    ]
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@review/FLIP": {
                draft.isFlipped = !draft.isFlipped;
                break;
            }     
            case "@review/OPTION": {
                if (draft.cardPosition >= draft.cards.length) {
                    break;
                }
                
                draft.cardPosition++;                
                draft.selectedCard = draft.cards[draft.cardPosition-1];
                draft.isFlipped = false;
                break;
            }     
            default:
                return state;
        }
    });
}