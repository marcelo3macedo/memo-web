export function openAction({ name }) {
    return {
        type: '@modal/OPEN',
        payload: { name }
    }
}

export function closeAction() {
    return {
        type: '@modal/CLOSE'
    }
}