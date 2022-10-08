import { v4 as uuidv4 } from 'uuid'
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

// add expense into database
// export const startAddExpense = (expenseData) => {
//     return (dispatch) => {
//         const {
//             description = '',
//             note = '',
//             amount = 0,
//             createdAt = 0
//         } = expenseData;
//         const expense = { description, note, amount, createdAt };
        
//         return database.ref('expenses').push(expense).then((ref) => {
//             dispatch(addExpense({
//                 id: ref.key,
//                 ...expense
//             }))
//         })
//     }
// }

export const startAddExpense = (expenseData = {}) => {
  console.log('entering start add expense');
    return (dispatch) => {
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = expenseData;
      const expense = { description, note, amount, createdAt };
      console.log('22 start add expense of data obj ', expenseData);
      return database.ref('expenses').push(expense).then((ref) => {
        console.log('database data insert success')
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }))
      }).catch((err) => {
        console.log('error at startAddExpense  ', err)
      });
    };
  };

// REMOVE_EXPENSE
export const removeExpense = ({ id = '' }) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

export const startRemoveExpense = (id) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove()
    .then(() => {
      dispatch(removeExpense({id}));
    })
    .catch(err => console.log('err while remove expenses  ', err))
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updateObj) => {
  return(dispatch) => {
    return database.ref(`expenses/${id}`).update(updateObj)
    .then(() => {
      dispatch(editExpense(id, updateObj));
    })
    .catch(err => console.log('err while update expenses  ', err))
  }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return(dispatch) => {
    return database.ref('expenses').once('value')
    .then((snapshot) => {
      const expenses = [];
      snapshot.forEach(child => {
        expenses.push({
          id: child.key,
          ...child.val()
        })
      })
      dispatch(setExpenses(expenses));
    })
    .catch(err => console.log('err while fetching expenses data ', err))
  }
}