import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_FREQUENCIES } from '@services/Api/routes';
import { REQUESTER_GET } from '@services/Api/types';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import { loadSuccess } from './actions';
import * as selectors from './selectors';

function* load() {
  try {
    const { frequencies: hasFrequencies } = yield select(selectors.frequencies);
    if (hasFrequencies && hasFrequencies.length > 0) {
      return;
    }

    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: API_FREQUENCIES
    });

    yield put(loadSuccess({ frequencies: response.data }));
  } catch (e) {
    console.log(e);
  }
}

export default all([takeLatest('@frequency/LOAD', load)]);
