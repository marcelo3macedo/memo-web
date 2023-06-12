import { REQUESTER_GET, REQUESTER_POST } from '@constants/Requester';
import { delay } from '@helpers/TimeHelper';
import { request } from '@services/Api/requester';
import {
  API_PAYMENTS,
  API_PAYMENTS_DETAILS,
  API_PLANS_OPTION,
} from '@services/Api/routes';
import { isValidDocument } from '@services/Document';
import { all, put, takeLatest } from 'redux-saga/effects';

import {
  indexSuccess,
  paymentCheck,
  paymentFailed,
  paymentSuccess,
} from './actions';

function* index({ payload }: any) {
  const { name } = payload || {};
  const response = yield request({
    type: REQUESTER_GET,
    method: `${API_PLANS_OPTION}/${name}`,
  });

  if (response.status !== 200) {
    return;
  }

  yield put(indexSuccess({ option: response.data }));
}

function* payment({ payload }: any) {
  const { document, option } = payload || {};

  if (!isValidDocument(document)) {
    return yield put(paymentFailed());
  }

  const data = {
    document,
    planOptionId: option.id,
    paymentTypeId: process.env.REACT_APP_PIX_ID,
  };

  const response = yield request({
    type: REQUESTER_POST,
    method: `${API_PAYMENTS}`,
    data,
  });

  if (response.status !== 200) {
    yield put(paymentFailed());
  }

  const { id } = response.data;

  yield put(paymentCheck({ id }));
}

function* validate({ payload }: any) {
  const { id } = payload || {};

  yield delay(5000);

  const response = yield request({
    type: REQUESTER_GET,
    method: `${API_PAYMENTS_DETAILS}/${id}`,
  });

  if (response.status !== 200 || response.data == null) {
    yield put(paymentCheck({ id }));
  }

  yield put(paymentSuccess({ payment: response.data }));
}

export default all([
  takeLatest('@planOptions/INDEX', index),
  takeLatest('@planOptions/PAYMENT', payment),
  takeLatest('@planOptions/PAYMENT_CHECK', validate),
]);
