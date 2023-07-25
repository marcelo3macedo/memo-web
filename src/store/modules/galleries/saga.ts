import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_DECKS_PUBLIC } from '@services/Api/routes';
import { REQUESTER_GET } from '@services/Api/types';
import { all, put, takeLatest } from 'redux-saga/effects';

import { loadSuccessAction } from './actions';

function* load() {
  try {
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: API_DECKS_PUBLIC
    });

    const { results, total, pages } = response.data || {};
    yield put(loadSuccessAction({ results, total, pages }));
  } catch (e) {
    console.log(e);
  }
}

function* search({ payload }: any) {
  try {
    const { value } = payload || {};
    const method = `${API_DECKS_PUBLIC}&name=${value}`;
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method
    });
    const { results, total, pages } = response.data || {};

    yield put(loadSuccessAction({ results, total, pages }));
  } catch (e) {
    console.log(e);
  }
}

export default all([
  takeLatest('@galleries/LOAD', load),
  takeLatest('@galleries/SEARCH', search)
]);
