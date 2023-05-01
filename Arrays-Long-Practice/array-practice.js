const findMinimum = arr => {
// return arr.find((num)=> num < undefined ? num : undefined)
let min = undefined
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if(min === undefined || num < min){
    (min = num)
  }
} return min

// O(n) time and O(1) space
};


// startTime = Date.now();
// console.log(findMinimum([1,2,3,4,5,6,3,4]));
// endTime = Date.now();
// console.log(`Runtime: ${endTime - startTime}ms`)

const runningSum = (arr, sum = 0 )=>  arr.map((ele)=> sum += ele)

// runningSum([1,2,3])

const evenNumOfChars = arr => {
count = 0
for(let i = 0; i < arr.length; i++){
 const ele =  arr[i]
if(ele.length % 2 === 0){
count++
}
}
return count
}

const smallerThanCurr = arr => {
  let array = []

for(let i = 0; i < arr.length; i++){
let count = 0
for(let j = 0; j < arr.length; j++){
  if( arr[i] > arr[j]){
    count++
  }
  // console.log(array)
}
array.push(count)
}
return array

}

const twoSum = (arr, target) => {
for(let i = 0; i < arr.length; i++){
let ele = arr[i]
for(let j = i + 1; j < arr.length; j++){
if( arr[j] + arr[i] === target){
  return true
}
}
}
return false

}
  // Your code here


  function secondLargest(arr) {
    // Check if the input array has at least two elements
    if (arr.length < 2) {
      return undefined; // Return undefined if the array has less than two elements
    }

    // Sort the array in descending order
    arr.sort((a, b)=>  b - a)

    return arr[1]; // Return the second element after sorting, which is the second largest number
  }

const shuffle = (arr) => {
let copy = arr.slice()
let random = Math.floor(Math.random() * copy.length)
for(let i = 0; i < copy.length; i++){
[copy[i] ,copy[random]] = [copy[random] ,copy[i]]
}
return copy
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
