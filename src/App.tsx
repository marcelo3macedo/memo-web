import Message from '@components/errors/Message';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/History';
import './services/Language';
import { persistor, store } from './store';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Message />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
