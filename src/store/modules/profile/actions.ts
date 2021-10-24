export function loadProfile() {
    return {
        type: '@profile/LOAD'
    }
}
export function loadProfileSuccess({ data }) {
    return {
        type: '@profile/LOAD_SUCCESS',
        payload: {
            data
        }
    }
}
export function updateProfile(data) {
    return {
        type: '@profile/UPDATE',
        payload: {
            data
        }
    }
}