# Sprint 5 Unit Test Problems

## Setup

1. Download the starter using the green button below
2. Rename the folder to `firstname-lastname-sprint-5-practice-problems`. For
   example, if your name is "Jane Doe", then name your folder
   `jane-doe-sprint-5-practice-problems`
3. Run `npm install` to install dependencies
4. Run `npm test` to run test specs
5. Your objective is to implement the functions in `/problems` to pass all
   specs.

## Hexadecimal to String

Convert a Hexadecimal array of numbers into decimal values. The decimal values
should be treated as ASCII character codes and converted into characters. Return
a string of those characters.

See the [MDN docs for `String.fromCharCode()`][fromCharCode-mdn] method
for how to convert character codes into ASCII characters.

Fill out the code in the `./problems/hexadecimal-to-string.js` file and test
it out with the following command:

```bash
npm test test/hexadecimal-to-string-spec.js
```

The file also has local tests that can be run with `node` then the filename:

```bash
node problems/hexadecimal-to-string.js
```

## Submission

When you are ready to submit:

1. Re-run all unit tests and fix any syntax errors that are crashing the tests. If
the unit tests crash, or do not run, you will receive a zero for the coding
portion of the assessment
2. Delete the `node_modules` directory
3. Rename your folder to begin with your `firstName_lastName`
4. Zip up your folder
5. Upload it

[fromcharcode-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode