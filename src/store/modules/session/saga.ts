import { getFirstFromSession } from '@helpers/CardHelper';
import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_SESSIONS, API_SESSIONSFEED } from '@services/Api/routes';
import { REQUESTER_GET } from '@services/Api/types';
import { loadAction as loadReviewAction } from '@store/modules/review/actions';
import { all, put, takeLatest } from 'redux-saga/effects';

import { loadAction, loadSuccessAction } from './actions';

function* load({ payload }: any) {
  try {
    const { id } = payload || {};
    const method = `${API_SESSIONS}/${id}`;
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method
    });

    const session = response.data;
    yield put(loadSuccessAction({ session }));
  } catch (e) {
    console.log(e);
  }
}

function* feed({ payload }: any) {
  try {
    const { deckId } = payload || {};
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: `${API_SESSIONSFEED}/${deckId}`
    });

    const { id: sessionId } = response.data || {};
    yield put(loadAction({ id: sessionId }));
  } catch (e) {
    console.log(e);
  }
}

function* loadSuccess({ payload }: any) {
  try {
    const { session } = payload || {};

    if (!session) {
      return;
    }

    const cardSelected = getFirstFromSession(session);
    yield put(loadReviewAction({ session, card: cardSelected }));
  } catch (e) {
    console.log(e);
  }
}

export default all([
  takeLatest('@session/LOAD', load),
  takeLatest('@session/FEED', feed),
  takeLatest('@session/LOAD_SUCCESS', loadSuccess)
]);
