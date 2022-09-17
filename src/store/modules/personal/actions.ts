export function loadDecksAction() {
    return {
        type: '@personal/LOAD_DECKS'
    }
}
export function loadDecksSuccess({ decks }) {
    return {
        type: '@personal/LOAD_DECKS_SUCCESS',
        payload: {
            decks
        }
    }
}
export function loadDeckAction() {
    return {
        type: '@personal/LOAD_DECK'
    }
}
export function loadDeckSuccess({ deck }) {
    return {
        type: '@personal/LOAD_DECK_SUCCESS',
        payload: {
            deck
        }
    }
}
export function removeModalAction({ visible, deck=null }) {
    return {
        type: '@personal/REMOVE_MODAL',
        payload: {
            visible, deck
        }
    }
}
export function editAction({ deck }) {
    return {
        type: '@personal/EDIT',
        payload: {
            deck
        }
    }
}
export function editSuccessAction({ deck }) {
    return {
        type: '@personal/EDIT_SUCCESS',
        payload: {
            deck
        }
    }
}
export function viewAction({ deck }) {
    return {
        type: '@personal/VIEW',
        payload: {
            deck
        }
    }
}