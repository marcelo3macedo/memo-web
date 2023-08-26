import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_CARDS } from '@services/Api/routes';
import {
  REQUESTER_DELETE,
  REQUESTER_GET,
  REQUESTER_POST,
  REQUESTER_PUT
} from '@services/Api/types';
import { all, put, takeLatest } from 'redux-saga/effects';

import {
  loadSuccessAction,
  removeSuccessAction,
  saveSuccessAction,
  updateSuccessAction
} from './actions';

function* load({ payload }: any) {
  try {
    const { id } = payload || {};

    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: `${API_CARDS}/${id}`
    });
    const cards = response.data;

    yield put(loadSuccessAction({ cards }));
  } catch (e) {
    console.log(e);
  }
}

function* save({ payload }: any) {
  try {
    const { id, title, content, secretContent } = payload || {};

    const response: ResponseGenerator = yield request({
      type: REQUESTER_POST,
      method: `${API_CARDS}/${id}`,
      data: { title, content, secretContent }
    });
    const card = response.data;

    yield put(saveSuccessAction({ card }));
  } catch (e) {
    console.log(e);
  }
}

function* update({ payload }: any) {
  try {
    const { id, title, content, secretContent } = payload || {};

    yield request({
      type: REQUESTER_PUT,
      method: `${API_CARDS}/${id}`,
      data: { title, content, secretContent }
    });

    yield put(updateSuccessAction({ card: payload }));
  } catch (e) {
    console.log(e);
  }
}

function* remove({ payload }: any) {
  try {
    const { id } = payload || {};

    yield request({
      type: REQUESTER_DELETE,
      method: `${API_CARDS}/${id}`
    });

    yield put(removeSuccessAction({ card: payload }));
  } catch (e) {
    console.log(e);
  }
}

export default all([
  takeLatest('@card/LOAD', load),
  takeLatest('@card/SAVE', save),
  takeLatest('@card/UPDATE', update),
  takeLatest('@card/REMOVE', remove)
]);
