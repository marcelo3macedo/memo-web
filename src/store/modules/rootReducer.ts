import { combineReducers } from 'redux';

import auth from './auth/reducer';
import config from './config/reducer';
import featuredUser from './featuredUser/reducer';
import filters from './filters/reducer';
import galleries from './galleries/reducer';
import navigate from './navigate/reducer';
import progress from './progress/reducer';
import sessions from './sessions/reducer';

export const rootReducer = combineReducers({
  auth,
  config,
  navigate,
  galleries,
  filters,
  featuredUser,
  progress,
  sessions
});

export type RootState = ReturnType<typeof rootReducer>;
