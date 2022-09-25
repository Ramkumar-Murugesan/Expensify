import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt: createdAt
        }
    }
}
// REMOVE_EXPENSE
const removeExpense = (id = 0) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE
const setStartDate = (date = 0) => ({
    type: 'SET_START_DATE',
    date
})
// SET_END_DATE
const setEndDate = (date = 0) => ({
    type: 'SET_END_DATE',
    date
})


const expensesReducerDefaultState = []

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

// REDUCERS
// expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    // Q -> why we didn't use push to add object in state
    // A -> we should not change the state in the reducer that why we use concat, If I use concat then it will change the reducer states

    switch (action.type) {
        case 'ADD_EXPENSE':
            // way 1
            // return (
            //     state.concat(action.expense)
            // )
            // way 2 ==> best
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(x => x.id != action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state;
    }
}

// filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))

//timestamps (milliseconds)
// timestamps 0 --> represent January 1st 1970 midnight(unix epoch)
// so postive number that 2, 2456, 456 etc., would be after January 1st 1970 midnight(unix epoch)
// so negative number that -2, -245, -1456 etc., would be before January 1st 1970 midnight(unix epoch)
//33400, 0, 10, -203

//get visible expenses based on filter value
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}
store.subscribe(() => {
    const state = store.getState();
    console.log('before visibleExpenses ', state)
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log('visibleExpenses  ', visibleExpenses)
})


//EXPENSES DISPATCH
// add expenses
const add1 = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }))
const add2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))


// // edit expenses
// store.dispatch(editExpense(add2.expense.id, { amount: 600 }))

// // remove expenses
// store.dispatch(removeExpense(add1.expense.id))



// //FILTERS DISPATCH
// // text filter
// store.dispatch(setTextFilter('Rent'))
// store.dispatch(setTextFilter(''))

// // sortBy
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

// //start and end date
// store.dispatch(setStartDate(0))
// store.dispatch(setEndDate(9999))









const demoState = {
    expenses: [{
        id: 'xds342sdx',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
