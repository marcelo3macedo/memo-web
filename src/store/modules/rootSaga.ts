import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import featuredUser from './featuredUser/saga';
import navigate from './navigate/saga';

export default function* rootSaga(): any {
  return yield all([navigate, auth, featuredUser]);
}
