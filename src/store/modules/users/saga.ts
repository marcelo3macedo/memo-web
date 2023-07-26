import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { request } from '@services/Api/requester';
import { API_REVIEW, API_USERS } from '@services/Api/routes';
import { REQUESTER_DELETE, REQUESTER_GET } from '@services/Api/types';
import { all, put, takeLatest } from 'redux-saga/effects';

import { signOutAction } from '../auth/actions';

import { loadSuccessAction } from './actions';

function* load() {
  try {
    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: API_REVIEW
    });
    const { sessions, featuredDecks } = response.data || {};

    yield put(loadSuccessAction({ sessions, featuredDecks }));
  } catch (e) {
    console.log(e);
  }
}

function* remove() {
  try {
    yield request({
      type: REQUESTER_DELETE,
      method: API_USERS
    });

    yield put(signOutAction());
  } catch (e) {
    console.log(e);
  }
}

export default all([
  takeLatest('@users/LOAD', load),
  takeLatest('@users/REMOVE', remove)
]);
