// write a function called myIndexOf and take in array of numbers and target number
// using a for loop we will go through the array
    // we will check to see if the target is equal to the element in the array
        // when the condition is met we will return the index of where it was found an
// if we have checked all elements in the array and the target is not found return -1
//
const myIndexOf = (array, target) => {
for(let i = 0; i <array.length; i++){
    let ele = array[i]
    if(target === ele){
        return i
            }

    }
    return -1 
}







//   for (let i = 0; i < array.length; i++) {
    // let map = {};
//     let value = array[i];
//     if (map[value] !== target) {
//       map[value] = i;
//     } else if (map[value] === target) return map[value], i;
//     else{
//         return -1
//     }

//     console.log(map)
//   }
console.log(myIndexOf([1, 2, 3, 4], 4)); // => 3
console.log(myIndexOf([5, 6, 7, 8], 2)); // => -1
