function quicksort(arr) {
  if(arr.length <= 1 ) return arr
  const pivot = arr[0]
  const left = arr.filter((ele)=> ele < pivot)
  const right = arr.filter((ele, i )=> (ele >= pivot) && ( i !== 0))
  return [...quicksort(left), pivot, ...quicksort(right)]
}
console.log(quicksort([8, 4, 5, 7, 6, 0]));
console.log(quicksort([5, 4, 3, 2, 1, 0]));
console.log(quicksort([-3, 4, 10, 0, 9, 7]));
