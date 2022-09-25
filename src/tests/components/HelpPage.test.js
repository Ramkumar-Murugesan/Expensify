import React from "react";
import { shallow } from "enzyme";
import HelpPage from '../../component/HelpPage'

test('should render Help Page', () => {
    const wrapper = shallow(<HelpPage />);
    expect(wrapper).toMatchSnapshot();
})