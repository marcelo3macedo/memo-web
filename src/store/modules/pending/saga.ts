import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_SESSIONS } from '@services/Api/routes';
import { REQUESTER_GET } from '@services/Api/types';
import { all, put, takeLatest } from 'redux-saga/effects';

import { loadMoreSuccessAction, loadSuccessAction } from './actions';

function* load() {
  try {
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: API_SESSIONS
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
    const method = `${API_SESSIONS}?page=${page}`;
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

export default all([
  takeLatest('@pending/LOAD', load),
  takeLatest('@pending/LOAD_MORE', loadMore)
]);
