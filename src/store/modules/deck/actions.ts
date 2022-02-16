export function saveAction({ name, isPublic, frequencyId, themeId }) {
    return {
        type: '@deck/SAVE',
        payload: {
            name, isPublic, frequencyId, themeId
        }
    }
}
export function saveSuccessAction(deck) {
    return {
        type: '@deck/SAVE_SUCCESS',
        payload: {
            deck
        }
    }
}
export function openAction({ deck }) {
    return {
        type: '@deck/OPEN',
        payload: {
            deck
        }
    }
}
export function openPublicAction({ deck }) {
    return {
        type: '@deck/OPEN_PUBLIC',
        payload: {
            deck
        }
    }
}
export function openSuccessAction({ deck }) {
    return {
        type: '@deck/OPEN_SUCCESS',
        payload: {
            deck
        }
    }
}
export function reviewAction({ deck }) {
    return {
        type: '@deck/REVIEW',
        payload: {
            deck
        }
    }
}
export function cloneAction({ deck }) {
    return {
        type: '@deck/CLONE',
        payload: {
            deck
        }
    }
}
export function addAction() {
    return {
        type: '@deck/ADD'
    }
}
export function addCard({ card }) {
    return {
        type: '@deck/ADD_CARD',
        payload: {
            card
        }
    }
}
export function updateCard({ card }) {
    return {
        type: '@deck/UPDATE_CARD',
        payload: {
            card
        }
    }
}
export function finishAction() {
    return {
        type: '@deck/FINISH'
    }
}
export function deleteCard({ card }) {
    return {
        type: '@deck/DELETE_CARD',
        payload: {
            card
        }
    }
}
export function loadNewDeck() {
    return {
        type: '@deck/LOAD_NEWDECK'
    }
}

export function newDeckSuccessAction({ frequencies, themes }) {
    return {
        type: '@deck/NEWDECK_SUCCESS',
        payload: {
            frequencies, 
            themes
        }
    }
}

export function changeThemeId({ themeId }) {
    return {
        type: '@deck/CHANGE_THEMEID',
        payload: {
            themeId
        }
    }
}



