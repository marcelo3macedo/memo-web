export function saveAction({ name }) {
    return {
        type: '@deck/SAVE',
        name
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
export function reviewAction() {
    return {
        type: '@deck/REVIEW'
    }
}