

const selection = ( arr) =>{
  const copy = arr.slice();
  const sorted = [];
  while (copy.length) {
    console.log(sorted.join(","));

    let min = Infinity;
    let minIndex;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] < min) {
        min = copy[i];
        minIndex = i;
      }
    }
    let value = copy.splice(minIndex, 1);
    sorted.push(...value);
  }
  return sorted;
}


console.log(selection([8, 4, 5, 7, 6, 0]));
console.log(selection([5, 4, 3, 2, 1, 0]));
console.log(selection([-3, 4, 10, 0, 9, 7]));
