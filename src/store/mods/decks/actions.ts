export function addSubmit({ deck }) {
    return {
        type: '@decks/ADD_SUBMIT',
        payload: { deck }
    }
}

export function addSubmitSuccess({ deck }) {
    return {
        type: '@decks/ADD_SUBMIT_SUCCESS',
        payload: { deck }
    }
}

export function setAction({ deck }) {
    return {
        type: '@decks/SET',
        payload: { deck }
    }
}

export function openAction({ id }) {
    return {
        type: '@decks/OPEN',
        payload: { id }
    }
}

export function openActionSuccess({ deck }) {
    return {
        type: '@decks/OPEN_SUCCESS',
        payload: { deck }
    }
}

export function editSubmitAction({ deck }) {
    return {
        type: '@decks/EDIT_SUBMIT',
        payload: { deck }
    }
}

export function editSubmitActionSuccess({ deck }) {
    return {
        type: '@decks/EDIT_SUBMIT_SUCCESS',
        payload: { deck }
    }
}

export function removeSubmitAction({ id }) {
    return {
        type: '@decks/REMOVE_SUBMIT',
        payload: { id }
    }
}

export function removeSubmitActionSuccess({ id }) {
    return {
        type: '@decks/REMOVE_SUBMIT_SUCCESS',
        payload: { id }
    }
}