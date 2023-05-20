function getNeighbors(row, col, matrix) {
  const neighbors =[
    [row + 1, col], //UP
    [row - 1, col], // DOWN
    [row + 1, col + 1],//UP-RIGHT
    [row + 1, col - 1], // UP LEFT
    [row - 1, col - 1], // DOWN LEFT
    [row - 1, col + 1], // DOWN RIGHT
    [row, col - 1], // LEFT
    [row, col + 1], // RIGHT

  ]
  return neighbors.filter((neighbor)=>{
    const [row, col] = neighbor
    // console.log(graph[row][col])
    return matrix[row] && matrix[row][col]

  })

  }
function countIslands(matrix, visited = new Set(), count = 0) {
  // Create a visited set to store visited nodes

  // Initialize count to 0

  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const coordinates = [row, col];
      const valueAtCoordinates = matrix[row][col];
      if (valueAtCoordinates === 1 && !visited.has(String(coordinates))) {
        count++;
        visited.add(String(coordinates));
        const stack = [[row, col]]
        while (stack.length) {
          let [row, col] = stack.pop();
          const neighborHood = getNeighbors(row, col, matrix);
          for(const [neighborRow , neighborCol] of neighborHood) {
            const valueOfCoordsInNeighborhood = matrix[neighborRow][neighborCol]
            if(valueOfCoordsInNeighborhood === 1 && !visited.has(String([neighborRow , neighborCol]))){
              visited.add(String([neighborRow , neighborCol]))
              stack.push([neighborRow , neighborCol])
            }
          }
        }
      }
    }
  }
  return count
}
  // If an index contains a 1 and has not been visited,
  // If cell is unvisited and contains a 1
  // Increment count and mark cell as visited
  // DO THE THING (increment island count by 1)
  // increment island count and start traversing neighbors
  // console.log(matrix[row][col], '++++++++++++++++++++++++')
  // Add stringified version of current index to the visited set

  // Create stack to perform iterative search on neighbors

  // While stack contains elements
  // Initialize a stack with current index
  // Pop element from stack

  // Perform iterative search on neighbors
  // Iterate over neigbors
  // If neighbor has not been visited
  // Mark neighbor as visited
  // Get valid neighbors of current element
  // Add neighbor to stack


// Your code here

//Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
