export function loadAction() {
    return {
        type: '@gallery/LOAD'
    }
}
export function loadMoreAction() {
    return {
        type: '@gallery/LOAD_MORE'
    }
}
export function loadSuccessAction({ data }) {
    return {
        type: '@gallery/LOAD_SUCCESS',
        payload: {
            data
        }
    }
}