export function saveAction({ name }) {
    return {
        type: '@deck/SAVE',
        name
    }
}
export function openAction(deck) {
    return {
        type: '@deck/OPEN',
        deck
    }
}
export function reviewAction() {
    return {
        type: '@deck/REVIEW'
    }
}