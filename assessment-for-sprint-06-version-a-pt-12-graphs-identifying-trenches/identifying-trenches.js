function findNeighbors(node, matrix) {
  const [row, col] = node;
  const neighbors = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
    // [row, col],
    // [row, col],
    // [row, col],
  ];

  return neighbors.filter((neighbors) => {
    const [row, col] = neighbors;
    return matrix[row] && matrix[row][col] < -5;
  });
}

function trenchTraversal(node, matrix, visited) {
  visited = new Set();
  visited.add(String(node));
  const stack = [node];
  while (stack.length) {
    const currentNode = stack.pop();
    const neighbors = findNeighbors(currentNode, matrix);
    if (neighbors.length > 2) return false;
    for (const neighbor of neighbors) {
      if (!visited.has(String(neighbor))) {
        visited.add(String(neighbor));
        stack.push(neighbor);
      }
    }
  }
  if (visited.size > 3) return true;
  else return false;
}
function identifyTrench(trenchMatrix) {
  const visited = new Set();
  for (let row = 0; row < trenchMatrix.length; row++) {
    for (let col = 0; col < trenchMatrix[row].length; col++) {
      let node = [row, col];
      const traversal = trenchTraversal(node, trenchMatrix, visited);
      if (traversal) return true;
    }
  }
  return false 
}
// Uncomment for local testing

// // Example 0
// const sonar_0 = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
// ]

// console.log(findNeighbors([1,1], sonar_0)) // => Expect [[2, 1], [1, 0], [1, 2]];

// // Example 1
// const sonar_1 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-8,-8,-9,-7],
//           [-5,-5,-5,-5,-8],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_1)) // <- Expect 'true'

// // Example 2
// const sonar_2 = [
//           [-5,-5,-5,-7,-5],
//           [-5,-8,-8,-9,-5],
//           [-5,-5,-5,-7,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_2)) // <- Expect 'false'

// // Example 3
// const sonar_3 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-5,-5,-5,-5],
//           [-5,-9,-9,-5,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_3)) // <- Expect 'false'

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyTrench, findNeighbors, trenchTraversal];
