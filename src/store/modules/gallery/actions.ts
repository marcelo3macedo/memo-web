export function loadAction() {
    return {
        type: '@gallery/LOAD'
    }
}
export function queryAction({ query }) {
    return {
        type: '@gallery/QUERY',
        payload: {
            query
        }
    }
}
export function loadSuccessAction({ decks, categories, featured }) {
    return {
        type: '@gallery/LOAD_SUCCESS',
        payload: {
            decks,
            categories,
            featured
        }
    }
}
export function loadFailedAction() {
    return {
        type: '@gallery/LOAD_FAILED'
    }
}
export function loadMoreAction() {
    return {
        type: '@gallery/LOAD_MORE'
    }
}