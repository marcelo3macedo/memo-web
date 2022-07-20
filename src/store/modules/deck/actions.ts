export function editAction({ deck }) {
    return {
        type: '@deck/EDIT',
        payload: {
            deck
        }
    }
}
export function editSuccessAction() {
    return {
        type: '@deck/EDIT_SUCCESS'
    }
}
export function editFailedAction() {
    return {
        type: '@deck/EDIT_FAILED'
    }
}
export function loadOptions() {
    return {
        type: '@deck/LOAD_OPTIONS'
    }
}
export function saveAction({ name, description, isPublic, frequencyId }) {
    return {
        type: '@deck/SAVE',
        payload: {
            name, description, isPublic, frequencyId
        }
    }
}
export function saveSuccessAction({ deck }) {
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
export function openSuccessAction({ deck }) {
    return {
        type: '@deck/OPEN_SUCCESS',
        payload: {
            deck
        }
    }
}
export function openFailureAction() {
    return {
        type: '@deck/OPEN_FAILURE'
    }
}
export function openPathAction({ path }) {
    return {
        type: '@deck/OPEN_PATH',
        payload: {
            path
        }
    }
}
export function openPathFailure() {
    return {
        type: '@deck/OPEN_PATH_FAILURE'
    }
}
export function openPathSuccess({ deck }) {
    return {
        type: '@deck/OPEN_PATH_SUCCESS',
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
export function addCard({ deck, card }) {
    return {
        type: '@deck/ADD_CARD',
        payload: {
            deck,
            card
        }
    }
}
export function addCardSuccess({ card }) {
    return {
        type: '@deck/ADD_CARD_SUCCESS',
        payload: {
            card
        }
    }
}
export function addCardFailure() {
    return {
        type: '@deck/ADD_CARD_FAILURE'
    }
}
export function updateCardAction({ card }) {
    return {
        type: '@deck/UPDATE_CARD',
        payload: {
            card
        }
    }
}
export function updateCardSuccess({ card }) {
    return {
        type: '@deck/UPDATE_CARD_SUCCESS',
        payload: {
            card
        }
    }
}
export function updateCardFailure() {
    return {
        type: '@deck/UPDATE_CARD_FAILURE'
    }
}
export function deleteCardAction({ card }) {
    return {
        type: '@deck/DELETE_CARD',
        payload: {
            card
        }
    }
}
export function deleteCardSuccess({ card }) {
    return {
        type: '@deck/DELETE_CARD_SUCCESS',
        payload: {
            card
        }
    }
}
export function deleteCardFailure() {
    return {
        type: '@deck/DELETE_CARD_FAILURE'
    }
}