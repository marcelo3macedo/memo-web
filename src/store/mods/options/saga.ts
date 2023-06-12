import { REQUESTER_GET } from '@constants/Requester';
import { request } from '@services/Api/requester';
import { API_DECKSOPTIONS } from '@services/Api/routes';
import { all, put, takeLatest } from 'redux-saga/effects';

import { loadActionSuccess } from './actions';

function* loadOptions() {
  const response = yield request({
    type: REQUESTER_GET,
    method: API_DECKSOPTIONS,
  });

  if (response.status !== 200 || !response.data) {
    return;
  }

  const { frequencies } = response.data;
  yield put(loadActionSuccess({ frequencies }));
}

export default all([takeLatest('@options/LOAD', loadOptions)]);
