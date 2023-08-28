import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_DECKS_PUBLIC } from '@services/Api/routes';
import { REQUESTER_GET } from '@services/Api/types';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import { loadMoreSuccessAction, loadSuccessAction } from './actions';
import * as selectors from './selectors';

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

function* loadMore({ payload }: any) {
  try {
    const { page } = payload || {};
    const { search } = yield select(selectors.galleries);
    const method = `${API_DECKS_PUBLIC}&page=${page}${
      search && search.length > 0 ? `&name=${search}` : ''
    }`;
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method
    });

    const { results } = response.data || {};
    yield put(loadMoreSuccessAction({ results }));
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
  takeLatest('@galleries/LOAD_MORE', loadMore),
  takeLatest('@galleries/SEARCH', search)
]);
