import { REQUESTER_GET } from '@constants/Requester';
import { request } from '@services/Api/requester';
import { API_TRANSACTIONS } from '@services/Api/routes';
import { all, put, takeLatest } from 'redux-saga/effects';

import { loadSuccess } from './actions';

function* load() {
  const response = yield request({
    type: REQUESTER_GET,
    method: API_TRANSACTIONS,
  });

  if (response.status !== 200) {
    return;
  }

  yield put(loadSuccess({ transactions: response.data }));
}

export default all([takeLatest('@transaction/LOAD', load)]);
