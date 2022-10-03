export function navigateTo({ sessionId }) {
    return {
        type: '@sessions/NAVIGATE_TO',
        payload: { sessionId }
    }
}

export function loadIndexAction({ id }) {
    return {
        type: '@sessions/LOAD_INDEX',
        payload: {
            id
        }
    }
}

export function loadIndexSuccess({ session }) {
    return {
        type: '@sessions/LOAD_INDEX_SUCCESS',
        payload: {
            session
        }
    }
}