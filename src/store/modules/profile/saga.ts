import { REQUESTER_GET, REQUESTER_PUT } from '@constants/Requester';
import { request } from '@services/Api/requester';
import { API_PROFILE } from '@services/Api/routes';
import { formatDateField } from '@services/Format';
import { all, put, takeLatest } from 'redux-saga/effects';

import {
  loadProfileFailure,
  loadProfileSuccess,
  updateProfileFailure,
  updateProfileSuccess,
} from './actions';

function* loadProfile() {
  const response = yield request({ type: REQUESTER_GET, method: API_PROFILE });

  if (response.status !== 200) {
    return yield put(loadProfileFailure());
  }

  const { id, name, email, createdAt } = response.data;
  const profile = {
    id,
    name,
    email,
    createdAt: formatDateField(createdAt),
  };

  yield put(loadProfileSuccess({ profile: profile }));
}

function* updateProfile({ payload }: any) {
  const response = yield request({
    type: REQUESTER_PUT,
    method: API_PROFILE,
    data: payload,
  });

  if (response.status !== 200) {
    return yield put(updateProfileFailure());
  }

  yield put(updateProfileSuccess());
}

export default all([
  takeLatest('@profile/LOAD', loadProfile),
  takeLatest('@profile/UPDATE', updateProfile),
]);
