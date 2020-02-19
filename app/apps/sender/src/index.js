// import './set-public-path';

import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import './index.css';

import App from './App';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: document.getElementById('component-sender'),
});

export const { bootstrap, mount, unmount } = reactLifecycles;
