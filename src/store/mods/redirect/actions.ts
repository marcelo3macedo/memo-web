export function setRedirectUrlAction({ url }) {
  return {
    type: '@redirect/SET_REDIRECTURL',
    payload: { url },
  };
}
export function redirectAction() {
  return {
    type: '@redirect/REDIRECT',
  };
}
export function redirectActionSuccess() {
  return {
    type: '@redirect/REDIRECT_SUCCESS',
  };
}
