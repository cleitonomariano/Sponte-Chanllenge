/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './Styles/GlobalStyle';

const App: React.FC = () => (
  <>
    <Router>
      <Routes />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
