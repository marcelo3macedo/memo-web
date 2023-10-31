import produce from 'immer';

const INITIAL_STATE = {
  name: '',
  description: '',
  levels: [],
  target: '',
  activeIndex: 0,
  sessions: null,
  validated: false,
  isCorrect: false,
  failed: false,
  correctAnswer: 0,
  initTime: new Date(),
  finishTime: new Date(),
  scores: []
};

export default function activities(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@activities/LOAD_SUCCESS': {
        draft.name = action.payload.name;
        draft.description = action.payload.description;
        draft.levels = action.payload.levels;
        draft.failed = false;
        break;
      }
      case '@activities/LOAD_FAILED': {
        draft.failed = true;
        break;
      }
      case '@activities/START': {
        draft.target = action.payload.slug;
        draft.name = action.payload.name;
        draft.activeIndex = 0;
        draft.correctAnswer = 0;
        draft.initTime = new Date();
        break;
      }
      case '@activities/CREATE_SUCCESS': {
        draft.sessions = action.payload.session;
        break;
      }
      case '@activities/GET_SCORE_SUCCESS': {
        draft.scores = action.payload.scores;
        break;
      }
      case '@activities/SELECT_SUCCESS': {
        draft.validated = true;
        draft.isCorrect = action.payload.isCorrect;
        draft.correctAnswer = action.payload.isCorrect
          ? draft.correctAnswer + 1
          : draft.correctAnswer;
        break;
      }
      case '@activities/NEXT': {
        draft.validated = false;
        draft.isCorrect = false;
        draft.activeIndex = draft.activeIndex + 1;
        draft.finishTime = new Date();
        break;
      }
      default:
        return state;
    }
  });
}
