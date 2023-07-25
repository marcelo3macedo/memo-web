import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import config from './config/saga';
import featuredUser from './featuredUser/saga';
import filters from './filters/saga';
import galleries from './galleries/saga';
import navigate from './navigate/saga';

export default function* rootSaga(): any {
  return yield all([navigate, config, auth, filters, galleries, featuredUser]);
}
