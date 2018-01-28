import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// routing
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter from './routers/AppRouter';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
