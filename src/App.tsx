import React from 'react';
import { setTranslations, setDefaultLanguage } from 'react-multi-lang';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

import Routes from "./routes";
import pt from "@assets/lang/pt.json";

setTranslations({pt})
setDefaultLanguage('pt')

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
