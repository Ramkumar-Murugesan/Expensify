import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from '../../component/EditExpensePage';
import expenses from '../fixtures/expenses'

let wrapper, history, startEditExpense, startRemoveExpense;

// will expect each time before each test run
beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[0]} />);
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startEditExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startRemoveExpense).toHaveBeenCalledWith(expenses[0].id);
})