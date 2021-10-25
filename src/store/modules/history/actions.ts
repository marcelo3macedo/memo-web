export function loadHistory() {
    return {
        type: '@history/LOAD'
    }
}
export function loadHistorySuccess({ data }) {
    return {
        type: '@history/LOAD_SUCCESS',
        payload: {
            data
        }
    }
}