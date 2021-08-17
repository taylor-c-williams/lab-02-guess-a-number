// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compareNumbers } from '../app.js';

const test = QUnit.test;

test('test compareNumbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(2,5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
