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

export function addSubmitSuccess({ card }) {
    return {
        type: '@cards/ADD_SUBMIT_SUCCESS',
        payload: { card }
    }
}

export function editSubmit({ card }) {
    return {
        type: '@cards/EDIT_SUBMIT',
        payload: { card }
    }
}

export function editSubmitSuccess({ card }) {
    return {
        type: '@cards/EDIT_SUBMIT_SUCCESS',
        payload: { card }
    }
}

export function editConfirmRemove() {
    return {
        type: '@cards/CONFIRM_REMOVE'
    }
}

export function removeSubmitSuccess({ card }) {
    return {
        type: '@cards/CONFIRM_REMOVE_SUCCESS',
        payload: { card }
    }
}

export function updateListAction({ list }) {
    return {
        type: '@cards/UPDATE_LIST',
        payload: { list }
    }
}
