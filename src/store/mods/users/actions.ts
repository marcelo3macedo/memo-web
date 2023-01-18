export function loadAction() {
    return {
        type: '@users/LOAD'
    }
}
export function loadSuccessAction({ lastSession, sessions, featuredDecks, userRole }) {
    return {
        type: '@users/LOAD_SUCCESS',
        payload: {
            lastSession,
            sessions,
            featuredDecks,
            userRole
        }
    }
}
export function loadFailedAction() {
    return {
        type: '@users/LOAD_FAILED'
    }
}