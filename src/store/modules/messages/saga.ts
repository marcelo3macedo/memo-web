import { generateNewSession } from '@helpers/message/generator';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_MESSAGE_CONTENT, PATH_MESSAGE_MAIN } from '@services/Navigation';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import { navigatePush } from '../navigate/actions';

import { createActionSuccess } from './actions';
import * as selectors from './selectors';

function* start({ payload }: any) {
  const { slug, category } = payload;
  const session = generateNewSession({ target: slug, category });

  yield put(createActionSuccess({ session }));
}

function* createSuccess() {
  yield put(
    navigatePush({
      route: RouteOptions.message,
      path: PATH_MESSAGE_CONTENT
    })
  );
}

function* back() {
  const { target } = yield select(selectors.activities);

  yield put(
    navigatePush({
      route: RouteOptions.message,
      path: `${PATH_MESSAGE_MAIN}/${target}`
    })
  );
}

export default all([
  takeLatest('@messages/START', start),
  takeLatest('@messages/CREATE_SUCCESS', createSuccess),
  takeLatest('@messages/BACK', back)
]);
