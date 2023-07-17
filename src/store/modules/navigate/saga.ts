import history from '@services/History';
import { all, takeLatest } from 'redux-saga/effects';

function* push({ payload }: any) {
  const { route, path } = payload || {};
  const historyPath = route ? `${route}/${path}` : path;

  return yield history.push(historyPath);
}

function* back() {
  return yield history.goBack();
}

export default all([
  takeLatest('@navigate/PUSH', push),
  takeLatest('@navigate/BACK_ACTION', back)
]);
