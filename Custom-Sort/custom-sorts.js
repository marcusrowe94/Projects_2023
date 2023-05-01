function ageSort(users) {
  let sorted = [];
  let copy = users.slice();
  while (copy.length) {
    let min = Infinity;
    let minIndex;
    for (let i = 0; i < copy.length; i++) {
      let userObj = copy[i];
      if (userObj.age < min) {
        min = userObj.age;
        minIndex = i;
      }
    }
    let youngestUsr = copy.splice(minIndex, 1);
    // console.log(youngestUsr)
    sorted.push(...youngestUsr);
  }
  // console.log(sorted)
  return sorted;
}

function oddEvenSort(arr) {
  const right = [];
  const left = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 !== 0) {
      right.push(num);
    } else {
      left.push(num);
    }
  }
  right.sort((a, b) => a - b);
  left.sort((a, b) => a - b);

  return [...right, ...left];
}

function validAnagrams(s, t) {
  let word1 = s.split("");
  let word2 = t.split("");
  while (word1.length === word2.length) {
    let sorted1 = word1.sort().join(",");
    let sorted2 = word2.sort().join(",");
    console.log(sorted1);
    console.log(sorted2);
    if (sorted1 === sorted2) {
      return true;
    }
    return false;
  }
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    const aLog = parseInt(Math.log10(a));
    const bLog = parseInt(Math.log10(b));
    if (aLog === bLog) return a - b;
    else {
      return bLog - aLog;
    }
  });
}

function frequencySort(arr) {
  const count = {};
  for (const num of arr) {
    if (count[num] !== undefined) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  arr.sort((a, b) => {
    if (count[a] === count[b]) {
      return b - a;
    } else {
      return count[a] - count[b];
    }
  });
  return arr;
}


module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
