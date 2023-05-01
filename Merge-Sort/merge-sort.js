// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <= 1) return arr
    // If so, it's already sorted: return
const mid = Math.floor(arr.length / 2) // Divide the array in half

  // Recursively sort the left half
  const left = mergeSort(arr.slice(0, mid))
  // Recursively sort the right half
  const right = mergeSort(arr.slice(mid))

  // Merge the halves together and return
  return merge(left, right)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
let arr = []
  // Point to the first value of each array

  // While there are still values in each array...
  while(arrA.length && arrB.length){
    if(arrA[0] < arrB[0]){
      arr.push(arrA.shift())
    }else{
      arr.push(arrB.shift())
    }

    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

    // Return the return array
  }
  return arr.concat(arrA, arrB)

}

module.exports = [merge, mergeSort];
