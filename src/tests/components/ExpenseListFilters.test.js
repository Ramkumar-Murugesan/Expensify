import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from '../../component/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let wrapper, setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        setStartDate={setStartDate} 
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        filters={filters}
        />)
})

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const textVal = 'bill'
    wrapper.find('input').simulate('change', {
        target: {value:textVal}
    })
    expect(setTextFilter).toHaveBeenCalledWith(textVal)
})

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: {value: "date"}
    })
    expect(sortByDate).toHaveBeenCalled();
})

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {value: "amount"}
    })
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date change', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')(altFilters);
    expect(setStartDate).toHaveBeenCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenCalledWith(altFilters.endDate);
})

test('should handle date focus change', () => {
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})