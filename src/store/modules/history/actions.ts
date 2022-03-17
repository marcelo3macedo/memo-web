export function loadAction() {
    return {
        type: '@history/LOAD'
    }
}
export function loadActionSuccess({ sessions }) {
    return {
        type: '@history/LOAD_SUCCESS',
        payload: {
            sessions
        }
    }
}
export function loadFailedAction() {
    return {
        type: '@history/LOAD_FAILED'
    }
}