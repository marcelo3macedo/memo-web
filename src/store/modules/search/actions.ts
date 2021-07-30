export function searchAction({ term }) {
    return {
        type: '@search/SEARCH_ACTION',
        term
    }
}