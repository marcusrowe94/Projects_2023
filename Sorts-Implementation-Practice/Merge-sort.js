const sorted = (arr) =>{
if(arr.length <= 1) return arr
const mid = Math.floor(arr.length / 2)

const left = sorted(arr.slice(0, mid))
const right = sorted(arr.slice(mid))

return merge(left, right)

}


function merge(arrA, arrB) {

  let arr = []


    while(arrA.length && arrB.length){
      if(arrA[0] < arrB[0]){
        arr.push(arrA.shift())
      }else{
        arr.push(arrB.shift())
      }
    }
    return arr.concat(arrA, arrB)

  }

console.log(sorted([8, 4, 5, 7, 6, 0]));
console.log(sorted([5, 4, 3, 2, 1, 0]));
console.log(sorted([-3, 4, 10, 0, 9, 7]));
