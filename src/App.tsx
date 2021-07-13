import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Routes from "./routes";
import "./services/Language";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
