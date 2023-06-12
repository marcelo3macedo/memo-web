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
export function signInSuccessAction({ user }) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user },
  };
}
export function signInFailureAction({ type }) {
  return {
    type: '@auth/SIGN_IN_FAILURE',
    payload: { type },
  };
}
export function signUpAction({ fullName, user, password }) {
  return {
    type: '@auth/SIGN_UP',
    payload: { fullName, user, password },
  };
}
export function signOutAction() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
export function refreshTokenAction({ refreshToken }) {
  return {
    type: '@auth/REFRESH_TOKEN',
    payload: { refreshToken },
  };
}

export function verifyAction() {
  return {
    type: '@auth/VERIFY',
  };
}
export function activateAction({ token }) {
  return {
    type: '@auth/ACTIVATE',
    payload: { token },
  };
}
export function activateSuccess() {
  return {
    type: '@auth/ACTIVATE_SUCCESS',
  };
}
export function activateFailed() {
  return {
    type: '@auth/ACTIVATE_FAILED',
  };
}
export function forgotPasswordAction({ user }) {
  return {
    type: '@auth/FORGOT_PASSWORD',
    payload: { user },
  };
}
export function logoutAction() {
  return {
    type: '@auth/LOGOUT',
  };
}
export function newPasswordAction({ token, password }) {
  return {
    type: '@auth/NEW_PASSWORD',
    payload: { token, password },
  };
}
