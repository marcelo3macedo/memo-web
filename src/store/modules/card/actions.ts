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

export function editAction(card) {
    return {
        type: '@card/EDIT',
        card
    }
}
