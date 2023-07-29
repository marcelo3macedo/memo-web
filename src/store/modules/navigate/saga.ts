import { ROUTES_HOME } from '@constants/routes';
import history from '@services/History';
import { all, takeLatest } from 'redux-saga/effects';

function* push({ payload }: any) {
  const { route, path } = payload || {};
  const historyPath = route ? `${route}/${path}` : path;

  if (route == path && path == ROUTES_HOME) {
    return yield history.push(ROUTES_HOME);
  }

  window.scrollTo(0, 0);

  return yield history.push(historyPath);
}

function* back() {
  return yield history.goBack();
}

export default all([
  takeLatest('@navigate/PUSH', push),
  takeLatest('@navigate/BACK_ACTION', back)
]);
