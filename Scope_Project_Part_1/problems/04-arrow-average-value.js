/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

const arrowAvgValue = numbers => {
  let avg = 0;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  avg += element
  }
return avg/numbers.length
}






// let sum = 0
// numbers.forEach(num => {
//   sum += num

// });
// return sum/ numbers.length
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  module.exports = null;
}
