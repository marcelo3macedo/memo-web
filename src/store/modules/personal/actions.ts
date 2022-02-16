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
export function addDecks() {
    return {
        type: '@personal/ADD_DECKS'
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
export function removeDeckAction({ deck }) {
    return {
        type: '@personal/REMOVE_DECK',
        payload: {
            deck
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