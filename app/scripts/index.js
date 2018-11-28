// reset.css
import 'ress/ress.css';
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducer from './reducer';

import './bootstrap';
import App from './components/App';

const store = createStore(reducer);

const root = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

/**
 * TODO
 * クリックイベント
 */
