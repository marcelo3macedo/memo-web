import Routes from '@routes/index.routes';
import history from '@services/History';
import i18n from '@services/Translation';
import GlobalTheme from '@themes/Provider';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <GlobalTheme>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={history}>
              <GlobalStyle />
              <Routes />
            </Router>
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </GlobalTheme>
  );
}

export default App;
