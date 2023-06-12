import produce from 'immer';

const INITIAL_STATE = {
  isLoading: false,
  signed: false,
  name: null,
  email: null,
  redirectTo: null,
  validation: {
    visible: false,
    type: null,
  },
  activation: {
    status: null,
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOAD': {
        draft.isLoading = false;
        break;
      }
      case '@auth/SIGN_IN': {
        draft.validation.visible = false;
        draft.isLoading = true;
        break;
      }
      case '@auth/SIGN_UP': {
        draft.isLoading = true;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.validation.visible = true;
        draft.isLoading = false;
        draft.validation.type = action.payload.type;
        break;
      }
      case '@auth/SERVER_FAILURE': {
        draft.isLoading = false;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.isLoading = false;
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        break;
      }
      case '@auth/CLOSE_ALERT': {
        draft.validation.visible = false;
        break;
      }
      case '@auth/LOGOUT': {
        draft.signed = false;
        draft.name = null;
        draft.email = null;
        break;
      }
      case '@auth/LOAD_ACTIVATE': {
        draft.activation.status = 'loading';
        break;
      }
      case '@auth/LOAD_ACTIVATE_SUCCESS': {
        draft.activation.status = 'success';
        break;
      }
      case '@auth/LOAD_ACTIVATE_FAILED': {
        draft.activation.status = 'failed';
        break;
      }
      case '@auth/SET_REDIRECTTO': {
        draft.redirectTo = !draft.redirectTo
          ? action.payload.redirectTo
          : draft.redirectTo;
        break;
      }
      case '@auth/REDIRECT_CLEAR_USER': {
        draft.redirectTo = null;
        break;
      }
      default:
        return state;
    }
  });
}
