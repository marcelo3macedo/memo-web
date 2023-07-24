import { combineReducers } from 'redux';

import auth from './auth/reducer';
import featuredUser from './featuredUser/reducer';
import navigate from './navigate/reducer';

export const rootReducer = combineReducers({ auth, navigate, featuredUser });

export type RootState = ReturnType<typeof rootReducer>;
