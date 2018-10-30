require.context('../public/', true);

// Enables ES7 features such as async/await in *.js/*.jsx code
import 'babel-core/register';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV, faUser, faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { App } from './App.tsx';

library.add(faEllipsisV, faUser, faUserPlus, faTrash);

ReactDOM.render(<App />, document.getElementById('app-root'));
