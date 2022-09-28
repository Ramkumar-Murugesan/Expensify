import totalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = totalExpenses([]);
    expect(result).toBe(0);
})

test('should correctly add up a single expense', () => {
    const result = totalExpenses([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
})

test('should correctly add up a multiple expenses', () => {
    // const total = expenses.length > 0 ? expenses.reduce((accumulator, currentValue) => accumulator+currentValue.amount) : 0;
    
    // console.log('ta  ', total)
    const result = totalExpenses(expenses);
    expect(result).toBe(expenses[0].amount+expenses[1].amount+expenses[2].amount)
})