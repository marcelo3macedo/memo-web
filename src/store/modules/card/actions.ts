export function openModalAction(modal) {
    return {
        type: '@card/OPEN_MODAL',
        payload: {
            modal
        }
    }
}
export function saveAction(card) {
    return {
        type: '@card/SAVE',
        card
    }
}
export function editAction(card) {
    return {
        type: '@card/EDIT',
        payload: {
            card
        }
    }
}
export function confirmEditAction(card) {
    return {
        type: '@card/CONFIRM_EDIT',
        payload: {
            card
        }
    }
}
export function removeAction(card) {
    return {
        type: '@card/REMOVE',
        payload: {
            card
        }
    }
}
export function confirmRemoveAction() {
    return {
        type: '@card/CONFIRM_REMOVE'
    }
}