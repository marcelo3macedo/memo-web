import React from 'react';
import { Provider } from "react-redux";
import { Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Routes from "./routes";
import store from "./store";
import history from "./services/History";
import "./services/Language";
import "./config/ReactotronConfig";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
