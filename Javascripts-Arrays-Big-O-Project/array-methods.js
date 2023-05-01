function randomNumberArr(max) {
    const res = new Array();

    for (let i = 0; i < max; i++) {
      const randomNumber = Math.floor(Math.random() * Math.floor(max));

      res.push(randomNumber);
    }

    return res;
  }
let startTime = Date.now();
console.log(randomNumberArr(5))
let endTime = Date.now();

 console.log(`Runtime: ${endTime - startTime}ms`);
// the time is linear and the space is O(n)

function pushTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
      arr.push(i);
    }

    return arr;
  }
  let n = 10000;
//   console.time(`pushTest(${n}): `);
//   pushTest(n);
//   console.timeEnd(`pushTest(${n}): `);
//   the time is linear and the space is O(n)

  function popTest(arr) {
    const n = arr.length;

    for (let i = 0 ; i < n ; i++) {
      arr.pop();
    }

    return arr;
  }
  let r = 10000000000
//   console.time(`popTest(${r}): `);
//   popTest(r);
//   console.timeEnd(`popTest(${r}): `);
  // the time is constant and space is O(1)
  let array = [10, 15, 27, 39, 49]
  const lessthan5 = (array) => array.every((ele)=> ele < 5 )


//   console.time(`everyTest(${newArray}): `);
//   every([10, 15, 27, 39, 49]);
//   console.timeEnd(`everyTest(${newArray}): `);
