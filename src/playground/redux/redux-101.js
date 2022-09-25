import { createStore } from "redux";


// createStore is used to create a store in redux --> it except a reducer which a function inside of createStore
const store = createStore((state = { count: 0 }, action) => {
    console.log('store state ', state);
    console.log('store action ', action);

    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy == 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy == 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count: action.val
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            break;
    }

});

// redux store have subscribe to execute each time when the createStore returned/emit its updated value
store.subscribe(() => {
    console.log('store subscribe ', store.getState())
})

// dispatch is used to call the reducers in the createStore and if it matchs the switch case then we return or emit its updated value in all the component who subscribe it or use it and the component will render automatically without setState in react

// INCREMENT WITH 10
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 10
})


// INCREMENT WITH 1
store.dispatch({
    type: 'INCREMENT',
})

// INCREMENT WITH 1
store.dispatch({
    type: 'INCREMENT'
})


// RESET
store.dispatch({
    type: 'RESET'
})

// SET
store.dispatch({
    type: 'SET',
    val: 100
})

// DECREMENT WITH 1
store.dispatch({
    type: 'DECREMENT'
})

// INCREMENT WITH 25
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 25
})


