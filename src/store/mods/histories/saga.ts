import { REQUESTER_GET } from '@constants/Requester';
import { request } from '@services/Api/requester';
import { API_SESSIONS } from '@services/Api/routes';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import { loadActionSuccess, loadMoreActionSuccess } from './actions';
import * as selectors from './selectors';

function* loadHistory() {
  const response = yield request({
    type: REQUESTER_GET,
    method: `${API_SESSIONS}/history`,
  });

  if (response.status !== 200) {
    return;
  }

  yield put(loadActionSuccess({ data: response.data }));
}

function* loadMoreHistory() {
  const { actualPage, sessions } = yield select(selectors.histories);
  const nextPage = actualPage + 1;
  const response = yield request({
    type: REQUESTER_GET,
    method: `${API_SESSIONS}/history?page=${nextPage}`,
  });

  if (response.status !== 200) {
    return;
  }

  const data = sessions.concat(response.data.results);
  yield put(loadMoreActionSuccess({ data, actualPage: nextPage }));
}

export default all([
  takeLatest('@history/LOAD', loadHistory),
  takeLatest('@history/LOAD_MORE', loadMoreHistory),
]);
