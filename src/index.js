import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LangProvider } from './Assets/Context/LangChanger';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <LangProvider>

    <Router>

      <App />

    </Router>

  </LangProvider>,
  document.getElementById('root')
);
