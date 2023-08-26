import produce from 'immer';

const INITIAL_STATE = {
  frequencies: [],
  visibility: [
    {
      id: 1,
      value: 'public',
      label: 'frequencies.public.title',
      description: 'frequencies.public.description'
    },
    {
      id: 2,
      value: 'private',
      label: 'frequencies.private.title',
      description: 'frequencies.private.description'
    }
  ]
};

export default function navigate(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@frequency/LOAD_SUCCESS': {
        draft.frequencies = action.payload.frequencies;
        break;
      }
      default:
        return state;
    }
  });
}
