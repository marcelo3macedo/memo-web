import { getInfoByKey } from '@helpers/ActivityHelper';
import {
  generateNewSession,
  isCorrectAnswer
} from '@helpers/session/generator';
import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { request } from '@services/Api/requester';
import { API_SCORE, API_SCORE_SAVE } from '@services/Api/routes';
import { REQUESTER_GET, REQUESTER_POST } from '@services/Api/types';
import {
  PATH_ACTIVITY_ACTIVITY,
  PATH_ACTIVITY_FINISHED,
  PATH_ACTIVITY_MAIN
} from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import {
  createActionSuccess,
  getScoreSuccessAction,
  loadActionFailed,
  loadActionSuccess,
  nextAction,
  selectSuccessAction
} from './actions';
import * as selectors from './selectors';

function* load({ payload }: any) {
  try {
    const { slug } = payload;
    const { name, description, levels } = yield getInfoByKey(slug);

    yield put(loadActionSuccess({ name, description, levels }));
  } catch (e) {
    yield put(loadActionFailed());
  }
}

function* start({ payload }: any) {
  const { slug, level } = payload;
  const session = yield generateNewSession({ slug, level });

  yield put(createActionSuccess({ session, type: slug }));
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
      path: `${PATH_ACTIVITY_FINISHED}`
    })
  );
}

function* getScore({ payload }: any) {
  try {
    const { slug } = payload;
    const method = API_SCORE.replace(':slug', slug);

    const response: ResponseGenerator = yield request({
      type: REQUESTER_GET,
      method,
      authNeeded: false
    });
    const scores = response.data.sort((a, b) => b.score - a.score);

    yield put(getScoreSuccessAction({ scores }));
  } catch (e) {
    console.log(e);
  }
}

function* saveScore({ payload }: any) {
  try {
    const { target } = yield select(selectors.activities);
    const { name, points } = payload;
    const method = API_SCORE_SAVE.replace(':slug', target);

    yield request({
      type: REQUESTER_POST,
      method,
      data: {
        name,
        score: points
      },
      authNeeded: false
    });
  } catch (e) {
    console.log(e);
  }
}

export default all([
  takeLatest('@activities/LOAD', load),
  takeLatest('@activities/START', start),
  takeLatest('@activities/CREATE_SUCCESS', createSuccess),
  takeLatest('@activities/BACK', back),
  takeLatest('@activities/SELECT_OPTION', selectOption),
  takeLatest('@activities/SELECT_SUCCESS', selectSuccess),
  takeLatest('@activities/NEXT', nextOption),
  takeLatest('@activities/GET_SCORE', getScore),
  takeLatest('@activities/SAVE_SCORE', saveScore)
]);
