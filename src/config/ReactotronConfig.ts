import Reacotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reacotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga({ except: [''] }))
    .connect();

  tron.clear();
}
