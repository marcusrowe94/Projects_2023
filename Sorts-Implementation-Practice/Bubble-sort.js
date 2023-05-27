const bubble = (arr) => {
  let swapped = true;
  while (swapped) {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
      // let temp = arr[i];
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true;
        // arr[i] = arr[i + 1];
        // arr[i + 1] = temp;

      }
    }
}
return arr;
};
console.log(bubble([8, 4, 5, 7, 6, 0]));
console.log(bubble([5, 4, 3, 2, 1, 0]));
console.log(bubble([-3, 4, 10, 0, 9, 7]));
