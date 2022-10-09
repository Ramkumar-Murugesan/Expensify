import React from "react";

// no longer needed because we are using enzyme shallow render
// import ReactShallowRenderer from 'react-test-renderer/shallow';

import { shallow } from 'enzyme';
// add globally for our application in jest.config.json --> so no need to import every file. it automatically convert it
// import toJSON from 'enzyme-to-json';
import {Header} from '../../component/Header';


// enzyme shallow renderer example
test('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot()


    // expect(toJSON(wrapper)).toMatchSnapshot()
    // expect(wrapper.find('h1').text()).toBe("Expensify")
})


test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
  });

// React shallow renderer example
// test('should render header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     // add react component to render
//     renderer.render(<Header />)
//     // should show the rendered component with props 
//     // console.log('shallow renderee ', renderer.getRenderOutput())

//     // we does not pass any value toMatchSnapshot method then it automatically take the snapshot(make copy of component) and store it in our application
//     // 2nd time when we test the application the jest use the taken snapshot and check with our render component
//     // if it match then the test pass  === if it not then the test is failed
//     // to update the snapshot of what we change in render component. then press u in terminal
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// })