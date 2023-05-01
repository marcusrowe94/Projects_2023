// function myMap(inputArray, callback) {
// const  array = []
//   for(let i = 0 ;i < inputArray.length; i++){
//   const  ele = inputArray[i]
//     if(callback(ele)){
//       // callback(ele)
//       array.push((ele))
//     }

//   }
//   return array
// }
const myMap = (inputArray, callback) => inputArray.map((el)=>callback(el))



module.exports = myMap;
