require.context('../public/', true);

// Enables ES7 features such as async/await in *.js/*.jsx code
import 'babel-core/register';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer.ts';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUserPlus, faTrash, faArrowUp, faArrowDown, faEraser, faLink } from '@fortawesome/free-solid-svg-icons';

import { AppContainer } from './containers/AppContainer.tsx';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(thunk))
);

library.add(faUser, faUserPlus, faTrash, faArrowUp, faArrowDown, faEraser, faLink);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app-root')
);
