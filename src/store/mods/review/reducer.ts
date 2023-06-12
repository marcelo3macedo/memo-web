import produce from 'immer';

const INITIAL_STATE = {
  session: null,
  isLoading: false,
  position: 0,
  options: [],
  answered: [],
};

export default function navigate(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@review/LOAD': {
        draft.session = action.payload.session;
        draft.position = 0;
        draft.answered = [];
        break;
      }
      case '@review/LOAD_OPTIONS': {
        draft.isLoading = true;
        break;
      }
      case '@review/LOAD_OPTIONS_SUCCESS': {
        draft.isLoading = false;
        draft.options = action.payload.options;
        break;
      }
      case '@review/LOAD_OPTIONS_FAILURE': {
        draft.isLoading = false;
        break;
      }
      case '@review/SET_OPTION': {
        const answered = Object.assign({}, action.payload.card);
        answered.difficultyId = action.payload.option.id;

        draft.answered.push(answered);
        draft.position++;
        break;
      }
      default:
        return state;
    }
  });
}
