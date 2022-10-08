import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
// import database from '../../firebase/firebase';


const createMockStore = configureStore([thunk]);

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', () => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };
  // await store.dispatch(startAddExpense(expenseData));
  // const actions = store.getActions();
  // console.log('list of actions ', actions)
  //  store.dispatch(startAddExpense(expenseData))
  // .then(() => {
  //   // expect(1).toBe(2);
  //   done();
  //   console.log('data inserted in testcase')
  // })
  // .catch(err => {
  //   // done(err)
  // });

  // direct database connection
  // return database.ref('expenses').push(expenseData).then(() => {
  //   console.log('data inserted');
  //   done();
  // }).catch(err => {
  //   console.log('error data  ', err)
  //   done();
  // })
});

test('should add expense with defaults to database and store', () => {

});

// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });


// set expenses test 
test('should set expenses action object', () => {
  const action = setExpenses([expenses[0]])
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
  })
})

test('should fetch the expenses from firebase ', () => {
  
})