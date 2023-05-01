
// function getAverage(nums) {
//     let singleArr = [1, 2,3,4,5];
//      let total = 0



//      for(let i = 0; i < nums; i++){

//        let numbers = nums[i]
//        if( numbers === 0){
//          total += 1
//        }else if (numbers === 2){
//            total += 2

//        }
//        else if (numbers === 3){
//           total += 3

//          }
//        else if ( numbers === 4){
//            total += 4

//           }
//        else if ( numbers === 5){



//                 total += 5



//            }


//         }
//        return singleArr.push(total)

//    }



//    function highestAverage(numsList) {

//      let highest = []
//      let index = 0
//      for(let i = 0; i < numsList.length; i++){
//        let subArr = numsList[i];
//        let averageNums = getAverage(subArr)
//        if(averageNums > highest){
//          highest = averageNums
//                averageNums += index
//                    index = i

//        }

//      }
//      return index   // Your code here
//    }




//for (let key in objName){}

// let cat = {
//     name: "king",
//     age: 12,
//     color: black

// };

// for( let currentKey in cat){
//     console.log(currentKey)
// }

// let {userId,
//      name: {
//         firstName,
//         lastName
//      }
//     }


// binary_search(arr, target, left, right) = -1                     if left > right
//                                            binary_search(arr, target, left, mid-1) if arr[mid] > target
//                                            binary_search(arr, target, mid+1, right) if arr[mid] < target
//                                            mid                   if arr[mid] == target
