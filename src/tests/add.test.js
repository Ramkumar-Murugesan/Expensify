const sum = (a,b) => a+b;

// Q - How the test function works?
// A - we just call it inside of any of our test files and we pass in two required arguments (first arg is name, second arg is code to run the testcases).
test('should add two numbers', () => {
        const results = sum(3, 4)

        // to test and throw error
        // if(results !== 7) {
        //    throw new Error(`you added 4 and 3. The result was ${results}. Expect 7`)
        // }

        //  jest provide method to check our result if not match then it throws error
        expect(results).toBe(7);
});

// challenge
const generateGreeting = (name) => `Hello ${name}!`;

test('should generate greeting from name', () => {
        const result = generateGreeting('Mike');
        expect(result).toBe(`Hello Mike!`);
})

// test enzyme and its configure to make sure its working
// import React from 'react';
// import { shallow, mount, render } from 'enzyme';
// import Header from '../component/Header';

// test('should test enzyme ', () => {
//         const wrapper = shallow(<Header />);
// })