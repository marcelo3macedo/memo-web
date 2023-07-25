import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { request } from '@services/Api/requester';
import { API_DECKS } from '@services/Api/routes';
import {
  REQUESTER_GET,
  REQUESTER_POST,
  REQUESTER_PUT
} from '@services/Api/types';
import { PATH_EDITSESSION } from '@services/Navigation';
import { navigate } from '@services/Navigation/root';
import { all, put, takeLatest } from 'redux-saga/effects';

import { loadSuccessAction, saveSuccessAction } from './actions';

function* load({ payload }: any) {
  try {
    const { id } = payload || {};
    if (!id) {
      yield put(loadSuccessAction({ deck: null }));
      return;
    }

    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method: `${API_DECKS}/${id}`
    });

    yield put(loadSuccessAction({ deck: response.data }));
  } catch (e) {
    console.log(e);
  }
}

function* save({ payload }: any) {
  const { name, description, frequencyId, isPublic } = payload || {};

  const response: ResponseGenerator = yield request({
    type: REQUESTER_POST,
    method: `${API_DECKS}`,
    data: { name, description, frequencyId, isPublic }
  });

  const { id } = response.data || {};
  yield put(saveSuccessAction({ id }));
}

function* edit({ payload }: any) {
  const { id, name, description, frequencyId, isPublic } = payload || {};

  yield request({
    type: REQUESTER_PUT,
    method: `${API_DECKS}/${id}`,
    data: { name, description, frequencyId, isPublic }
  });
}

function* saveSuccess({ payload }: any) {
  const { id } = payload || {};

  yield navigate(RouteOptions.session, {
    screen: PATH_EDITSESSION,
    params: { id }
  });
}

export default all([
  takeLatest('@deck/LOAD', load),
  takeLatest('@deck/SAVE', save),
  takeLatest('@deck/SAVE_SUCCESS', saveSuccess),
  takeLatest('@deck/EDIT', edit)
]);
