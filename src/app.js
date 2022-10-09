import React from 'react';
import  ReactDOM  from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import AppRouter, {history} from './router/AppRouter';
import { Provider } from 'react-redux';

import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
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



ReactDOM.render(<p>Loading....</p>, document.getElementById('app'));

let isRendered = false;
// to avoid render 2 times
const renderApp = () => {
    if(!isRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        isRendered = true;
    }
}


firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('user logged in ', user)
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        console.log('user logged out')
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }
})

// without authentication
// store.dispatch(startSetExpenses()).then(() => {
//     ReactDOM.render(jsx, document.getElementById('app'));
// })

// ReactDOM.render(jsx, document.getElementById('app'));

// basics
// firebase.auth().onAuthStateChanged((user) => {
//     if(user) {
//         console.log('user logged in')
//     } else {
//         console.log('user logged out')
//     }
// })