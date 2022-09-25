import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboard from '../../component/ExpenseDashboardPage'

test('should render Expense Dashboard Page', () => {
    const wrapper = shallow(<ExpenseDashboard />);
    expect(wrapper).toMatchSnapshot();
})