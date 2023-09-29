import { all, takeLatest } from 'redux-saga/effects';

function start({ payload }: any) {
  console.log(payload);
}

export default all([takeLatest('@activities/START', start)]);
