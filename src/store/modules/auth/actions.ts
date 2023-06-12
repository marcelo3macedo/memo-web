export function loadAction() {
  return {
    type: '@auth/LOAD',
  };
}
export function signInAction({ user, password }) {
  return {
    type: '@auth/SIGN_IN',
    payload: { user, password },
  };
}
export function signUpAction({ fullName, user, password }) {
  return {
    type: '@auth/SIGN_UP',
    payload: { fullName, user, password },
  };
}
export function logoutAction() {
  return {
    type: '@auth/LOGOUT',
  };
}
export function forgotPasswordAction({ user }) {
  return {
    type: '@auth/FORGOT_PASSWORD',
    payload: { user },
  };
}
export function signInSuccessAction({ name, email }) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { name, email },
  };
}
export function signInFailureAction({ type }) {
  return {
    type: '@auth/SIGN_IN_FAILURE',
    payload: { type },
  };
}
export function checkAuthAction(force = false) {
  return {
    type: '@auth/CHECK_AUTH',
    payload: {
      force,
    },
  };
}
export function refreshTokenAction({ refreshToken }) {
  return {
    type: '@auth/REFRESH_TOKEN',
    payload: { refreshToken },
  };
}
export function closeAlertAction() {
  return {
    type: '@auth/CLOSE_ALERT',
  };
}
export function loadActivate({ token }) {
  return {
    type: '@auth/LOAD_ACTIVATE',
    payload: { token },
  };
}
export function loadActivateSuccess() {
  return {
    type: '@auth/LOAD_ACTIVATE_SUCCESS',
  };
}
export function loadActivateFailed() {
  return {
    type: '@auth/LOAD_ACTIVATE_FAILED',
  };
}
export function serverFailureAction() {
  return {
    type: '@auth/SERVER_FAILURE',
  };
}
export function setRedirectUrl({ redirectTo }) {
  return {
    type: '@auth/SET_REDIRECTTO',
    payload: { redirectTo },
  };
}
export function redirectUser() {
  return {
    type: '@auth/REDIRECT_USER',
  };
}
export function redirectClearUser() {
  return {
    type: '@auth/REDIRECT_CLEAR_USER',
  };
}
