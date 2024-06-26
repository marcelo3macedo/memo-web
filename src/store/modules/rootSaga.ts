import { all } from 'redux-saga/effects';

import activities from './activities/saga';
import auth from './auth/saga';
import card from './card/saga';
import config from './config/saga';
import deck from './deck/saga';
import featuredUser from './featuredUser/saga';
import filters from './filters/saga';
import frequencies from './frequencies/saga';
import galleries from './galleries/saga';
import messages from './messages/saga';
import navigate from './navigate/saga';
import pending from './pending/saga';
import progress from './progress/saga';
import review from './review/saga';
import session from './session/saga';
import sessions from './sessions/saga';
import users from './users/saga';

export default function* rootSaga(): any {
  return yield all([
    activities,
    navigate,
    messages,
    config,
    auth,
    card,
    filters,
    galleries,
    progress,
    featuredUser,
    sessions,
    pending,
    deck,
    frequencies,
    users,
    session,
    review
  ]);
}
