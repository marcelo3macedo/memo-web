import { REQUESTER_GET } from '@constants/Requester';
import { request } from '@services/Api/requester';
import { API_SEARCH } from '@services/Api/routes';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import { loadFailedAction, loadSuccessAction } from './actions';
import * as selectors from './selectors';

function* load() {
  const { query, page } = yield select(selectors.gallery);
  const params = `${query ? '/' + query : ''}?page=${page}`;
  const response = yield request({
    type: REQUESTER_GET,
    method: `${API_SEARCH}${params}`,
  });

  if (response.status !== 200 || !response.data) {
    return yield put(loadFailedAction());
  }

  const { decks, categories, featured } = response.data;
  yield put(loadSuccessAction({ decks, categories, featured }));
}

export default all([
  takeLatest('@gallery/LOAD', load),
  takeLatest('@gallery/QUERY', load),
  takeLatest('@gallery/LOAD_MORE', load),
]);
