export function openAction({ deck }) {
    return {
        type: '@decks_open/OPEN',
        payload: {
            deck
        }
    }
}
export function loadAction({ deckId }) {
    return {
        type: '@decks_open/LOAD',
        payload: {
            deckId
        }
    }
}
export function loadFailureAction() {
    return {
        type: '@decks_open/LOAD_FAILURE'
    }
}
export function loadSuccessAction({ deck }) {
    return {
        type: '@decks_open/LOAD_SUCCESS',
        payload: {
            deck
        }
    }
}