export function loadProfile() {
  return {
    type: '@profile/LOAD',
  };
}
export function loadProfileSuccess({ profile }) {
  return {
    type: '@profile/LOAD_SUCCESS',
    payload: {
      profile,
    },
  };
}
export function loadProfileFailure() {
  return {
    type: '@profile/LOAD_FAILURE',
  };
}
export function updateProfile({ name }) {
  return {
    type: '@profile/UPDATE',
    payload: {
      name,
    },
  };
}
export function updateProfileSuccess() {
  return {
    type: '@profile/UPDATE_SUCCESS',
  };
}
export function updateProfileFailure() {
  return {
    type: '@profile/UPDATE_FAILURE',
  };
}
