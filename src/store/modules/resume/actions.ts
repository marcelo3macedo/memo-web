export function loadAction() {
    return {
        type: '@resume/LOAD'
    }
}
export function loadSuccessAction({ data }) {
    return {
        type: '@resume/LOAD_SUCCESS',
        payload: {
            data
        }
    }
}