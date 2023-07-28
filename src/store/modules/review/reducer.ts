import produce from 'immer';

const INITIAL_STATE = {
  session: null,
  card: null,
  loading: false,
  position: 0,
  options: [],
  answered: []
};

export default function navigate(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@review/LOAD': {
        draft.session = action.payload.session;
        draft.card = action.payload.card;
        draft.position = 0;
        draft.answered = [];
        draft.loading = true;
        break;
      }
      case '@review/LOAD_SUCCESS': {
        draft.options = action.payload.options;
        draft.loading = false;
        break;
      }
      case '@review/OPTION_SELECT': {
        const answered = Object.assign({}, draft.card) as any;
        answered.difficultyId = action.payload.id;

        draft.answered.push(answered);
        draft.position++;
        break;
      }
      case '@review/UPDATE_CARD': {
        draft.card = action.payload.card;
        break;
      }
      case '@review/FINISH': {
        draft.card = null;
        draft.position = 0;
        break;
      }
      default:
        return state;
    }
  });
}
