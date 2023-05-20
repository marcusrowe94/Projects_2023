function findPeak(matrix) {
  let highest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[i][k] > highest) {
        highest = matrix[i][k];
      }
    }
  }

  return highest;
}

function findStarts(matrix) {
  let starts = [];

  // Top Row
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) {
      starts.push([0, i]);
    }
  }

  // Bottom Row
  for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
    if (matrix[matrix.length - 1][i] == 0) {
      starts.push([matrix.length - 1, i]);
    }
  }

  // Left except first and last
  for (let i = 1; i < matrix.length - 1; i++) {
    if (matrix[i][0] == 0) {
      starts.push([i, 0]);
    }
  }

  // Right except first and last
  for (let i = 1; i < matrix.length - 1; i++) {
    if (matrix[i][matrix[0].length - 1] == 0) {
      starts.push([i, matrix[0].length - 1]);
    }
  }

  return starts;
}

function findNeighbors(node, matrix) {
  const [row, col] = node;
  const currentLocation = matrix[row][col];
  const neigbors = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
    [row - 1, col + 1],
    [row - 1, col - 1],
    [row + 1, col - 1],
    [row + 1, col + 1],
  ];
let res = []
  for(const neigbor of neigbors ){ 
    const [row, col] = neigbor
    if(matrix[row] && matrix[row][col]){
      const currentValue = matrix[row][col]
      if( currentLocation === currentValue + 1) res.push(neigbor)
      if( currentLocation === currentValue - 1) res.push(neigbor)
      if( currentLocation === currentValue) res.push(neigbor)


    }

  }
  return res
}
//   return neigbors.filter((neigbor) => {
//     const [r, c] = neigbor;
//     return matrix[r] && Math.abs(matrix[r][c] - currentLocation) <= 1;
//   });
// }

function pathTraversal(node, matrix, visited = new Set(), peak) {
  const stack = [[node]];
  visited.add(String(node));
  while (stack.length) {
    const currentPath = stack.pop();
    const currentNode = currentPath[currentPath.length - 1];
    // console.log(currentNode)
    const valueOfNode = matrix[currentNode[0]][currentNode[1]];
    // console.log(valueOfNode,"THE THING IM LOOKING FOR+++++++++++++++")
    if (valueOfNode === peak) return true;
    const neighbors = findNeighbors(currentNode, matrix);

    for (const neighbor of neighbors) {
      if (!visited.has(String(neighbor))) {
        visited.add(String(neighbor));
        stack.push([...currentPath, neighbor])
      }
    }
  }
  return false
}

function identifyPath(mountain) {
  // Find the peak
  const peak = findPeak(mountain)
  // Find the start
  const starts = findStarts(mountain)
  for(const pathWay of starts){
    const traverse = pathTraversal(pathWay, mountain, new Set(),peak)

    if(traverse)return pathWay
  }

  // const traverse = pathTraversal()
  return false
  // Traverse from the starts and try to get to the top
  // Your code here
}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
// ];

// console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
