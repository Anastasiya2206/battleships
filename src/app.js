import React from 'react';
import ReactDom from 'react-dom';
import App from './components/main';
import Provider from './components/provider.js'
import { createStore } from 'redux';
import battleshipApp from './redux/reducer.js';
import { startPositioning, endPositioning } from './redux/actions/positioning.js';

const store = createStore(battleshipApp, window.devToolsExtension && window.devToolsExtension());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
