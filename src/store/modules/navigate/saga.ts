import history from '@services/History';
import { all, takeLatest } from 'redux-saga/effects';

function* push({ path }: any) {
  return yield history.push(path);
}

function* back() {
  return yield history.goBack();
}

export default all([
  takeLatest('@navigate/PUSH', push),
  takeLatest('@navigate/BACK_ACTION', back),
]);
