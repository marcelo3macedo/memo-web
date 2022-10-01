export function loadAction() {
    return {
        type: '@options/LOAD'
    }
}

export function loadActionSuccess({ frequencies }) {
    return {
        type: '@options/LOAD_SUCCESS',
        payload: { frequencies }
    }
}