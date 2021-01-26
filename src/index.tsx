import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { DarkModeProvider } from './hooks/useDarkMode';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
