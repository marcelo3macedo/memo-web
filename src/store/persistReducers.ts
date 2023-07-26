import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistor = reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'memo',
      storage,
      whitelist: ['config']
    },
    reducers
  );

  return persistedReducer;
};

export default persistor;
