import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const result = removeExpense({ id: '123abc' })
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const result = editExpense('123abc', { description: 'water bill', amount: 300 });
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'water bill',
            amount: 300
        }
    })
})

test('should setup add expense action object with provided value', () => {
    const expenseData = {
        description: 'water bill',
        amount: 300,
        note: 'This is last months bill',
        createdAt: 1000
    }
    const result = addExpense(expenseData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ... expenseData,
            id: expect.any(String)   // for generic/dynamic value then we use expect.any it does not care about value only care about its type
        }
    })
})

test('should setup add expense action object with default value', () => { 
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})