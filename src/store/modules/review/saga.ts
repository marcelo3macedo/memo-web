import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { request } from '@services/Api/requester';
import { API_DIFFICULTIES, API_SESSIONS } from '@services/Api/routes';
import { REQUESTER_GET, REQUESTER_PUT } from '@services/Api/types';
import { PATH_REVIEWFINISH } from '@services/Navigation';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import { navigatePush } from '../navigate/actions';

import { finishAction, loadSuccess, updateCardAction } from './actions';
import * as selectors from './selectors';

function* load() {
  try {
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: API_DIFFICULTIES
    });

    yield put(loadSuccess({ options: response.data }));
  } catch (e) {
    console.log(e);
  }
}

function* selectOption() {
  try {
    const { session, position } = yield select(selectors.review);

    if (!session || !session.cards) {
      return;
    }

    yield put(updateCardAction({ card: session.cards[position] }));
  } catch (e) {
    console.log(e);
  }
}

function* checkCards() {
  try {
    const { session, position, answered } = yield select(selectors.review);

    if (!session || !session.cards || position < session.cards.length) {
      return;
    }

    yield request({
      type: REQUESTER_PUT,
      method: `${API_SESSIONS}/${session.id}`,
      data: {
        cards: answered
      }
    });

    yield put(finishAction());
  } catch (e) {
    console.log(e);
  }
}

function* finished() {
  yield put(
    navigatePush({
      route: RouteOptions.review,
      path: PATH_REVIEWFINISH
    })
  );
}

export default all([
  takeLatest('@review/LOAD', load),
  takeLatest('@review/OPTION_SELECT', selectOption),
  takeLatest('@review/UPDATE_CARD', checkCards),
  takeLatest('@review/FINISH', finished)
]);
