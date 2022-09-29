export function editAction({ card }) {
    return {
        type: '@cards/EDIT',
        payload: { card }
    }
}

export function removeAction({ card }) {
    return {
        type: '@cards/REMOVE',
        payload: { card }
    }
}

export function addSubmit({ deckId, card }) {
    return {
        type: '@cards/ADD_SUBMIT',
        payload: { deckId, card }
    }
}

export function addSubmitSuccess() {
    return {
        type: '@cards/ADD_SUBMIT_SUCCESS'
    }
}

export function editSubmit({ card }) {
    return {
        type: '@cards/EDIT_SUBMIT',
        payload: { card }
    }
}

export function editSubmitSuccess() {
    return {
        type: '@cards/EDIT_SUBMIT_SUCCESS'
    }
}

export function editConfirmRemove() {
    return {
        type: '@cards/CONFIRM_REMOVE'
    }
}

export function editRemoveSuccess() {
    return {
        type: '@cards/CONFIRM_REMOVE_SUCCESS'
    }
}