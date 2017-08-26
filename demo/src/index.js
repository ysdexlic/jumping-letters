import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

import '../style/style.styl';

render(
  <App />
  , document.querySelector('#root')
);
