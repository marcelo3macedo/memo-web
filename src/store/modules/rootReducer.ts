import { combineReducers } from 'redux';

import activities from './activities/reducer';
import auth from './auth/reducer';
import card from './card/reducer';
import config from './config/reducer';
import deck from './deck/reducer';
import featuredUser from './featuredUser/reducer';
import filters from './filters/reducer';
import frequencies from './frequencies/reducer';
import galleries from './galleries/reducer';
import messages from './messages/reducer';
import navigate from './navigate/reducer';
import pending from './pending/reducer';
import progress from './progress/reducer';
import review from './review/reducer';
import session from './session/reducer';
import sessions from './sessions/reducer';
import users from './users/reducer';

export const rootReducer = combineReducers({
  activities,
  messages,
  auth,
  deck,
  config,
  navigate,
  galleries,
  filters,
  featuredUser,
  progress,
  sessions,
  card,
  pending,
  users,
  frequencies,
  session,
  review
});

export type RootState = ReturnType<typeof rootReducer>;
