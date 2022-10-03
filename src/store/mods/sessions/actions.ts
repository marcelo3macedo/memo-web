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

export function loadListAction(search=null) {
    return {
        type: '@sessions/LOAD_LIST',
        payload: {
            search
        }
    }
}

export function loadListSuccessAction({ sessions }) {
    return {
        type: '@sessions/LOAD_LIST_SUCCESS',
        payload: {
            sessions
        }
    }
}

export function removeFromListAction({ id }) {
    return {
        type: '@sessions/REMOVE_FROM_LIST',
        payload: {
            id
        }
    }
}