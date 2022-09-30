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

