import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../component/ExpenseForm";
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    // before form submit
    expect(wrapper).toMatchSnapshot();
    // find the form tag and do submit, we need to mock function (2nd arg) without that it throw error
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    // access the state value
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    // after form submit
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New description'
    wrapper.find('input').at(0).simulate('change', {
        target: {value: value}
    })
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New Note'
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "12.35"
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "12.35123"
    wrapper.find('input').at(1).simulate('change', {
        target: {value: value}
    })
    expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy =jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
})

test('should set calender focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toBe(focused)
})