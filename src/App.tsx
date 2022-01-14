import React from 'react';
import { Provider } from "react-redux";
import { Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { PersistGate } from "redux-persist/integration/react";
import Message from '@components/errors/Message';
import Routes from "./routes";
import { store, persistor } from "./store";
import history from "./services/History";
import "./services/Language";
import "./config/ReactotronConfig";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Message />
          <Routes/>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
