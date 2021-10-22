export function loadAction() {
    return {
        type: '@search/LOAD'
    }
}
export function loadSuccessAction({ search }) {
    return {
        type: '@search/LOAD_SUCCESS',
        payload: {
            search
        }
    }
}
export function searchAction({ term }) {
    return {
        type: '@search/SEARCH_ACTION',
        payload: {
            term
        }        
    }
}