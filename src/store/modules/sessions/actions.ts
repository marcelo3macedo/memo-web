export function loadAction() {
    return {
        type: '@sessions/LOAD'
    }
}
export function loadSuccessAction({ sessions }) {
    return {
        type: '@sessions/LOAD_SUCCESS',
        payload: {
            sessions
        }
    }
}
export function loadFailedAction() {
    return {
        type: '@sessions/LOAD_FAILED'
    }
}
export function indexAction({ id }) {
    return {
        type: '@sessions/INDEX',
        payload: {
            id
        }
    }
}
export function indexSuccessAction({ session }) {
    return {
        type: '@sessions/INDEX_SUCCESS',
        payload: {
            session
        }
    }
}
export function indexFailedAction() {
    return {
        type: '@sessions/INDEX_FAILED'
    }
}