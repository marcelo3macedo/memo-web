export function initAction() {
    return {
        type: '@decks_remove/INIT'
    }
}

export function setTargetAction({ target }) {
    return {
        type: '@decks_remove/SET_TARGET',
        payload: {
            target
        }
    }
}

export function removeSessionAction() {
    return {
        type: '@decks_remove/REMOVE'
    }
}

export function removeSessionSuccessAction() {
    return {
        type: '@decks_remove/REMOVE_SUCCESS'
    }
}

export function removeSessionFailureAction() {
    return {
        type: '@decks_remove/REMOVE_FAILURE'
    }
}