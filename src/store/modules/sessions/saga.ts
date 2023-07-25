/* eslint-disable prettier/prettier */
import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_DECKS, API_SESSIONS } from '@services/Api/routes';
import { REQUESTER_GET } from '@services/Api/types';
import { all, put, takeLatest } from 'redux-saga/effects';

import {
    indexSuccessAction,
    loadMoreSuccessAction,
    loadSuccessAction
} from './actions';

function* load() {
  try {
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: API_DECKS
    });
    const { results, total, pages } = response.data || {};

    yield put(loadSuccessAction({ results, total, pages }));
  } catch (e) {
    console.log(e);
  }
}

function* loadMore({ payload }: any) {
  try {
    const { page, query } = payload || {};
    const method = `${API_DECKS}?page=${page}${query ? `&name=${query}` : ''}`;
    if (!page) {
      return;
    }

    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method
    });

    const { results, total, pages } = response.data;
    yield put(
      loadMoreSuccessAction({ actualPage: page, results, total, pages })
    );
  } catch (e) {
    console.log(e);
  }
}

function* search({ payload }: any) {
  try {
    const { value } = payload || {};
    const method = `${API_DECKS}?name=${value}`;
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

function* index({ payload }: any) {
  try {
    const { id } = payload || {};
    const method = `${API_SESSIONS}/${id}`;
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method
    });

    yield put(indexSuccessAction({ session: response.data }));
  } catch (e) {
    console.log(e);
  }
}

export default all([
  takeLatest('@sessions/LOAD', load),
  takeLatest('@sessions/LOAD_MORE', loadMore),
  takeLatest('@sessions/SEARCH', search),
  takeLatest('@sessions/INDEX', index)
]);
