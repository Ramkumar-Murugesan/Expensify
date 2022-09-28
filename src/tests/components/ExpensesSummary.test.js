import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../component/ExpensesSummary";

test('should render ExpensesSummary correctly with default value', () => {
    const wrapper = shallow(<ExpensesSummary  expensesCount={0} expensesTotal={0} />)
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpensesSummary correctly with custom value', () => {
    const wrapper = shallow(<ExpensesSummary  expensesCount={2} expensesTotal={200} />)
    expect(wrapper).toMatchSnapshot();
})