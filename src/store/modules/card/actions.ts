export function newCardAction() {
    return {
        type: '@card/NEW'
    }
}
export function saveAction(card) {
    return {
        type: '@card/SAVE',
        card
    }
}
export function saveEditionAction(card) {
    return {
        type: '@card/SAVE_EDITION',
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
export function removeAction(card) {
    return {
        type: '@card/REMOVE',
        payload: {
            card
        }
    }
}
export function closeEditAction() {
    return {
        type: '@card/CLOSE_EDIT'
    }
}
export function closeCreateAction() {
    return {
        type: '@card/CLOSE_CREATE'
    }
}
export function closeRemoveAction() {
    return {
        type: '@card/CLOSE_REMOVE'
    }
}
export function removeCardAction() {
    return {
        type: '@card/REMOVE_CARD'
    }
}
