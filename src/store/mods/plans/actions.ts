export function loadAction() {
    return {
        type: '@plans/LOAD'
    }
}

export function loadSuccess({ plans }) {
    return {
        type: '@plans/LOAD_SUCCESS',
        payload: {
            plans
        }
    }
}