/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

Run tests on just this file by typing `npm test test/02-print-and-pause-spec.js`
on the command line.

***********************************************************************/

function printAndPause(nums) {
if(!nums.length) return;
//  const integer = nums[0]
 console.log(nums[0])
 setTimeout(() => {
   printAndPause(nums.slice(1))

  }, nums[0]);

}
// console.log(printAndPause([200, 800, 200, 800, 200, 800]))
// 200
// // pause 200ms
// 800
// // pause 800ms
// 200
// // pause 200ms
// 800
// // pause 800ms
// 200
// // pause 200ms
// 800
// // pause 800ms

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}
