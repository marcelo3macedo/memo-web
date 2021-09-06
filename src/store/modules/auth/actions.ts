export function signInAction({ user, password }) {
    return {
        type: '@auth/SIGN_IN',
        payload: { user, password }
    }
}
export function signUpAction({ fullName, user, password }) {
    return {
        type: '@auth/SIGN_UP',
        payload: { fullName, user, password }
    }
}
export function logoutAction() {
    return {
        type: '@auth/LOGOUT'
    }
}
export function forgotPasswordAction({ user }) {
    return {
        type: '@auth/FORGOT_PASSWORD',
        payload: { user }
    }
}
export function signInSuccessAction({ name, email }) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { name, email }
    }
}
export function signInFailureAction({ type }) {
    return {
        type: '@auth/SIGN_IN_FAILURE',
        payload: { type }
    }
}
export function checkAuthAction(force=false) {
    return {
        type: '@auth/CHECK_AUTH',
        payload: {
            force
        }
    }
}
export function refreshTokenAction({ refreshToken }) {
    return {
        type: '@auth/REFRESH_TOKEN',
        payload: { refreshToken }
    }
}
export function closeAlertAction() {
    return {
        type: '@auth/CLOSE_ALERT'
    }
}