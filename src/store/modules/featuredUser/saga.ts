import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_FEATUREDUSER } from '@services/Api/routes';
import { REQUESTER_GET } from '@services/Api/types';
import { all, put, takeLatest } from 'redux-saga/effects';

import { loadFailedAction, loadSuccessAction } from './actions';

function* load() {
  try {
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: API_FEATUREDUSER
    });

    const { featuredDecks, numberOfSessions } = response.data || {};

    yield put(loadSuccessAction({ featuredDecks, numberOfSessions }));
  } catch (error: any) {
    yield put(loadFailedAction());
  }
}

export default all([takeLatest('@featuredUser/LOAD', load)]);
