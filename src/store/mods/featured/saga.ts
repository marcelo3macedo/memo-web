import { REQUESTER_GET } from '@constants/Requester';
import { request } from '@services/Api/requester';
import { API_DECKS } from '@services/Api/routes';
import { PATH_FEATURED } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import { all, put, takeLatest } from 'redux-saga/effects';

import { loadIndexSuccess } from './actions';

function* load({ payload }: any) {
  const { id } = payload;
  const response = yield request({
    type: REQUESTER_GET,
    method: `${API_DECKS}/${id}`,
  });

  if (response.status !== 200 || !response.data) {
    return;
  }

  yield put(loadIndexSuccess({ deck: response.data }));
}

function* navigateTo({ payload }: any) {
  const { deckId } = payload || {};
  const path = `${PATH_FEATURED}/${deckId}`;

  yield put(navigatePush({ path }));
}

function* loadIndex({ payload }: any) {
  const { id } = payload;
  const response = yield request({
    type: REQUESTER_GET,
    method: `${API_DECKS}/${id}`,
  });

  if (response.status !== 200 || !response.data) {
    return;
  }

  yield put(loadIndexSuccess({ deck: response.data }));
}

export default all([
  takeLatest('@featured/LOAD', load),
  takeLatest('@featured/NAVIGATE_TO', navigateTo),
  takeLatest('@featured/LOAD_INDEX', loadIndex),
]);
