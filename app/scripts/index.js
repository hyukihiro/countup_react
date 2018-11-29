// reset.css
import 'ress/ress.css';
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import rootReducers from './reducers';

import './bootstrap';
import App from './containers/App';

const store = createStore(rootReducers);

const root = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
