export function loadAction() {
    return {
        type: '@gallery/LOAD'
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