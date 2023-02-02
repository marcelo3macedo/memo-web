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
export function queryCategoryAction({ category }) {
    return {
        type: '@gallery/CATEGORY',
        payload: {
            category
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
export function loadMoreActionSuccess({ data, actualPage }) {
    return {
        type: '@gallery/LOAD_MORE_SUCCESS',
        payload: {
            data,
            actualPage
        }
    }
}