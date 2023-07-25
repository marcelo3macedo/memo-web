import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_DECKS_FILTERS } from '@services/Api/routes';
import { REQUESTER_GET } from '@services/Api/types';
import { all, put, takeLatest } from 'redux-saga/effects';

import { loadSuccessAction } from './actions';

function* load() {
  try {
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: API_DECKS_FILTERS
    });

    yield put(loadSuccessAction({ filters: response.data }));
  } catch (e) {
    console.log(e);
  }
}

export default all([takeLatest('@filters/LOAD', load)]);
