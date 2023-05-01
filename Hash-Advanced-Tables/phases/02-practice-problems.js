function anagrams(str1, str2) {
  const set = new Set(str1);
  for (const char of str2) {
    if (set.has(char)) {
      return true;
    } else {
      // set.add(char);
      return false;
    }
  }
}

// console.log(anagrams('elvis', 'lives'))
// console.log(anagrams('coding', 'shmoding'))
// console.log(anagrams('pear', 'bear'))

function commonElements(arr1, arr2) {
  let set = new Set(arr2);
  return arr1.filter((ele) => set.has(ele));
}

function duplicate(arr) {
  const set = new Set();
  return arr.find((ele) => {
    if (set.has(ele)) {
      return true;
    }
    set.add(ele);
    return false;
  });
}

function twoSum(nums, target) {
 const map = {}
  // const numbers = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i]
    const value = nums[i]
    if(map[comp] !== undefined){

   return true
    }
    map[value] = i
  }
  return false 
}

function wordPattern(pattern, strings) {
  // Your code here
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
