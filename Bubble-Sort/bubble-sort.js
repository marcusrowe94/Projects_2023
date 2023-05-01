function bubbleSort(arr) {
  // Iterate through the array
  // console.log(arr)
  // console.log('++++++++++++++++++++++++')
  let swapped = true
  while(swapped){
    swapped = false
  for (let i = 0; i < arr.length; i++) {
    // If the current value is greater than its neighbor to the right
    // if (arr[i] < arr[i + 1]) {

    // }
    // Swap those values

    if (arr[i] > arr[i + 1]) {
      swapped = true
      let temp = arr[i];
      // console.log(temp)
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;

      console.log(arr.join(","));
    }


    // let tmp = arr[1];
    // arr[1] = arr[2];
    // arr[2] = tmp;

    // Do not move this console.log

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
  }
}
return arr
}

module.exports = bubbleSort;
