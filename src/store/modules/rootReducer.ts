import { combineReducers } from 'redux';

import auth from './auth/reducer';
import config from './config/reducer';
import featuredUser from './featuredUser/reducer';
import filters from './filters/reducer';
import galleries from './galleries/reducer';
import navigate from './navigate/reducer';

export const rootReducer = combineReducers({
  auth,
  config,
  navigate,
  galleries,
  filters,
  featuredUser
});

export type RootState = ReturnType<typeof rootReducer>;
