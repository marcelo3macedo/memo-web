import {
  generateNewSession,
  isCorrectAnswer
} from '@helpers/session/generator';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import {
  PATH_ACTIVITY_ACTIVITY,
  PATH_ACTIVITY_FINISHED,
  PATH_ACTIVITY_MAIN
} from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import {
  createActionSuccess,
  nextAction,
  selectSuccessAction
} from './actions';
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

function* selectOption({ payload }: any) {
  const { option, answer } = payload;
  const isCorrect = isCorrectAnswer(option, answer);

  yield put(selectSuccessAction({ isCorrect }));
}

function* selectSuccess() {
  yield new Promise(resolve =>
    setTimeout(() => {
      resolve(true);
    }, 3000)
  );
  yield put(nextAction());
}

function* nextOption() {
  const { sessions, activeIndex } = yield select(selectors.activities);

  if (!sessions || sessions.length > activeIndex) {
    return;
  }

  yield put(
    navigatePush({
      route: RouteOptions.activities,
      path: PATH_ACTIVITY_FINISHED
    })
  );
}

export default all([
  takeLatest('@activities/START', start),
  takeLatest('@activities/CREATE_SUCCESS', createSuccess),
  takeLatest('@activities/BACK', back),
  takeLatest('@activities/SELECT_OPTION', selectOption),
  takeLatest('@activities/SELECT_SUCCESS', selectSuccess),
  takeLatest('@activities/NEXT', nextOption)
]);
