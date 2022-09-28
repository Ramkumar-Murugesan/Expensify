import React from 'react';
import  ReactDOM  from 'react-dom';
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';

const store = configureStore();

console.log('app store ', store.getState())

// add Expenses --> Gas bill
// store.dispatch(addExpense({ description: 'Gas bill', amount: 4500 }));
// // add Expenses --> Water bill
// store.dispatch(addExpense({ description: 'Water bill',  createdAt: 1000 }));
// // add Expenses --> Rent
// store.dispatch(addExpense({ description: 'Rent', amount: 10950 }));
// // setTextFilter ---> bill
// store.dispatch(setTextFilter('bill'))
// getVisibleExpenses ---> print visibles ones to screen
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log('visibleExpenses   ', visibleExpenses)

// setTimeout(() => {store.dispatch(setTextFilter('water'))}, 3000)

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
