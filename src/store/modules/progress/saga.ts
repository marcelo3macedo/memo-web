import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_PROGRESS } from '@services/Api/routes';
import { REQUESTER_GET } from '@services/Api/types';
import { all, put, takeLatest } from 'redux-saga/effects';

import { loadSuccessAction } from './actions';

function* load() {
  try {
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: API_PROGRESS
    });
    yield put(loadSuccessAction({ progress: response.data }));
  } catch (e) {
    console.log(e);
  }
}

export default all([takeLatest('@progress/LOAD', load)]);
