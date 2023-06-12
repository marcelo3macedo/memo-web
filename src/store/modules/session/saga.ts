import { REQUESTER_GET, REQUESTER_PUT } from '@constants/Requester';
import { request } from '@services/Api/requester';
import { API_SESSIONS } from '@services/Api/routes';
import {
  PATH_REVIEW,
  PATH_SESSION,
  PATH_SESSION_COMPLETED,
} from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import { all, put, takeLatest, select } from 'redux-saga/effects';

import {
  openSuccessAction,
  optionActionSuccess,
  reviewAction,
} from './actions';
import * as selectors from './selectors';

function* open(data) {
  const response = yield request({
    type: REQUESTER_GET,
    method: `${API_SESSIONS}/${data.payload.sessionId}`,
  });

  if (response.status !== 200) {
    return;
  }

  yield put(openSuccessAction({ session: response.data }));
}

function* openSuccess() {
  yield put(navigatePush({ path: PATH_SESSION }));
}

function* openDeckSuccess() {
  yield put(reviewAction());
}

function* review() {
  yield put(navigatePush({ path: PATH_REVIEW }));
}

function* option() {
  const session = yield select(selectors.session);
  const element = yield select(selectors.element);

  if (
    !session ||
    !session.cards ||
    element.cardPosition < session.cards.length
  ) {
    return;
  }

  const answered = yield select(selectors.answered);
  const response = yield request({
    type: REQUESTER_PUT,
    method: `${API_SESSIONS}/${session.id}/cards`,
    data: { cards: answered },
  });

  if (response.status !== 204) {
    return;
  }

  yield put(optionActionSuccess());
}

function* optionSuccess() {
  yield put(navigatePush({ path: PATH_SESSION_COMPLETED }));
}

export default all([
  takeLatest('@session/OPEN', open),
  takeLatest('@session/OPEN_SUCCESS', openSuccess),
  takeLatest('@session/OPEN_DECK_SUCCESS', openDeckSuccess),
  takeLatest('@session/REVIEW', review),
  takeLatest('@session/OPTION', option),
  takeLatest('@session/OPTION_SUCCESS', optionSuccess),
]);
