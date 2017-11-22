import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import { BrowserRouter } from 'react-router-dom';
//require('./scss/style.scss');

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('app'));
