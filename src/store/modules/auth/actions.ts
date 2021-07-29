
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
export function forgotPasswordAction({ user }) {
    return {
        type: '@auth/FORGOT_PASSWORD',
        payload: { user }
    }
}