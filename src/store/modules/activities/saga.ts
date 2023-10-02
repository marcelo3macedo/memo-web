import { generateNewSession } from '@helpers/session/generator';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import {
  PATH_ACTIVITY_ACTIVITY,
  PATH_ACTIVITY_MAIN
} from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import { createActionSuccess } from './actions';
import * as selectors from './selectors';

function* start({ payload }: any) {
  const { slug } = payload;
  const type = slug;
  const session = generateNewSession({ type });
  yield put(createActionSuccess({ session, type }));
}

function* createSuccess() {
  yield put(
    navigatePush({
      route: RouteOptions.activities,
      path: PATH_ACTIVITY_ACTIVITY
    })
  );
}

function* back() {
  const { target } = yield select(selectors.activities);

  yield put(
    navigatePush({
      route: RouteOptions.activities,
      path: `${PATH_ACTIVITY_MAIN}/${target}`
    })
  );
}

export default all([
  takeLatest('@activities/START', start),
  takeLatest('@activities/CREATE_SUCCESS', createSuccess),
  takeLatest('@activities/BACK', back)
]);
