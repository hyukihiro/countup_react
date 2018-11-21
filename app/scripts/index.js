// reset.css
import 'ress/ress.css';
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import './bootstrap';
import Container from './components/molecules/container';
// import { Provider } from 'react-redux';
// import store from './store';

const root = document.getElementById('root');
render(
  <div>
    <Container label="足す" text="unko" />
  </div>,
  root
);
