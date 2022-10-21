export function loadAction() {
    return {
        type: '@users/LOAD'
    }
}
export function loadSuccessAction({ lastSession, sessions, featuredDecks }) {
    return {
        type: '@users/LOAD_SUCCESS',
        payload: {
            lastSession,
            sessions,
            featuredDecks
        }
    }
}
export function loadFailedAction() {
    return {
        type: '@users/LOAD_FAILED'
    }
}