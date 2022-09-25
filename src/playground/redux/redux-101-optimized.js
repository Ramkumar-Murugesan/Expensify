import { createStore } from "redux";


// method using by dispatcher:

// const incrementCount = ({ incrementBy = 1 } = {}) => (
//     {
//         type: 'INCREMENT',
//         incrementBy
//     }
// )

// incrementCount with number arguments (payload object)
const incrementCount = (payload = {}) => {
   return {
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy == 'number' ? payload.incrementBy : 1
    }
}

// decrementCount method with spread operator args ====> best and optimized way of using it
const decrementCount = ({ decrementBy = 1 } = {}) => (
    {
        type: 'DECREMENT',
        decrementBy
    }
)

// use custom variable name (val) of args with default value
const setCount = ({ count: val = 0 }) => (
    {
        type: 'SET',
        val
    }
)

const resetCount = () => (
    {
        type: 'RESET'
    }
)


// reducers
const countReducer = (state = { count: 0 }, action) => {
    console.log('store state ', state);
    console.log('store action ', action);

    switch (action.type) {
        case 'INCREMENT':
            // incrementBy variable is not longer needed with verify condition because in Increment function itself we set the incrementBy with 1 if it not set by user
            // const incrementBy = typeof action.incrementBy == 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // decrementBy variable is not longer needed with verify condition because in Decrement function itself we set the decrementBy with 1 if it not set by user
            // const decrementBy = typeof action.decrementBy == 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
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
            return state;
    }

}

// createStore is used to create a store in redux --> it except a reducer which a function inside of createStore
const store = createStore(countReducer);

// redux store have subscribe to execute each time when the createStore returned/emit its updated value
store.subscribe(() => {
    console.log('store subscribe ', store.getState())
})

// dispatch is used to call the reducers in the createStore and if it matchs the switch case then we return or emit its updated value in all the component who subscribe it or use it and the component will render automatically without setState in react

// INCREMENT WITH 10
store.dispatch(incrementCount({ incrementBy: 1000 }))


// INCREMENT WITH 1
store.dispatch(incrementCount())

// INCREMENT WITH 1
store.dispatch(incrementCount())


// RESET
store.dispatch(resetCount())

// SET
store.dispatch(setCount({ count: 60 }))

// DECREMENT WITH 1
store.dispatch(decrementCount())

// INCREMENT WITH 25
store.dispatch(decrementCount({ decrementBy: 25 }))


