const { push } = require("../Insertion-Sort/insertion-sort");

function selectionSort(arr) {
  // Copy the original array
  const copy = arr.slice();
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty...
  while (copy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    let min = Infinity;
    let minIndex;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] < min) {
        min = copy[i];
        minIndex = i;
      }

      // Find the index of the minimum value in the unsorted half

      // Save and remove the value at the min index

      // Add the min value to the end of the sorted array
    }
    let value = copy.splice(minIndex, 1);
    sorted.push(...value);
  }
  return sorted;
}

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;
  // console.log("++++++++++++++++++")
  // Repeat while the unsorted half is not empty:
  while (pointer < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));
    let min = Infinity;
    let minIndex = undefined;
    // let min = Math.min(...arr.slice(pointer))
    // Find the index of the minimum value in the unsorted half
    // let minIndex = arr.indexOf(min)
    for (let i = pointer; i < arr.length; i++) {
      // Save the min value
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    // Shift every unsorted value to the left of the min value to the right by 1
    // }
    // arr.splice(minIndex, 1)
    // arr.splice(pointer, 0, min)
    for (let i = minIndex; i > pointer; i--) {
      arr[i] = arr[i - 1];
    }
 arr[pointer] = min
    // Put the min value at the divider
    pointer++;
    // Increment the divider and repeat
  }
  return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
