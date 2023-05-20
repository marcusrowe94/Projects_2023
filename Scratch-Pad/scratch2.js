// write a function called myIndexOf and take in array of numbers and target number
// using a for loop we will go through the array
// we will check to see if the target is equal to the element in the array
// when the condition is met we will return the index of where it was found an
// if we have checked all elements in the array and the target is not found return -1

function printBreadthFirst(start) {
    const queue = [start]
    const seen = new Set(queue)
    while(queue.length){
    let node = queue.shift()
    console.log(node)
        adjList[node].forEach((node)=>{
            if(!seen.has(node)){
               seen.add(node)
              queue.push(node)
            }

        })

      }

  }
console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                      // One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                      // One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                      // One possible solution:  4, 3, 5, 6, 2, 1
let adjList = {
1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}
function printDepthFirst(start) {
    const stack = [start]
    const seen = new Set(stack)
    while(stack.length > 0){
   let node = stack.pop()
   console.log(node)
    for(const neighbor of adjList[node]){
      if(!seen.has(neighbor)){
        seen.add(neighbor)
        stack.push(neighbor)
      }

    }

  }

}
console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                    // One possible solution:  3, 4, 6, 5, 1, 2
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                    // One possible solution:  6, 4, 5, 2, 1, 3
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                    // One possible solution:  4, 6, 5, 2, 1, 3
function breadthFirstSearch(start, end) {

  let adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
    const queue = [start]
    const seen = new Set(queue)
    while(queue.length > 0){
      let node = queue.shift()
      // console.log(node)
      for(const neighbor of adjList[node]){
        if(!seen.has(neighbor)){
          seen.add(neighbor)
          queue.push(neighbor)

    // need to add to the end of the queue
        }
        if(seen.has(end)){
          return true
      }
    }
}
  return false
}

let adjList2 = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function aShortestPath(start, target) {
    // I changed end to target
    const queue = [[start]]
    const seen = new Set(queue)
    while(queue.length){
     let currentPath = queue.shift()
     let currentNode = currentPath[currentPath.length -1]
     if(currentNode === target){
         return currentPath
       }
     for(const neighbor of adjList[currentNode]){
       if(!seen.has(neighbor)){
          seen.add(neighbor)
             queue.push([...currentPath, neighbor])
       }

      }

    }
    return false

  }

}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false

function aLongestPath(start, target) {
  const queue = [[start]]
  const seen = new Set(queue)
  while(queue.length){
    let currentPath = queue.shift()
    let currentNode = currentPath[currentPath.length -1]
    if(currentNode === target){
      return currentPath
    }
    for(const neighbor of adjList[currentNode]){
      if(!seen.has(neighbor)){
        seen.add(neighbor)
        queue.push([...currentPath, neighbor])
      }
    }
    // sort queue by path length in descending order
    queue.sort((a, b) => b.length - a.length)
  }
  return false
}

let adjList1 = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};
function degreesOfSeparation(start, end) {
  // Initialize a set to keep track of seen nodes and a queue to keep track of nodes to visit
  const seen = new Set();
  const queue = [[start]];

  // Loop through the queue until it's empty
  while (queue.length > 0) {
    // Dequeue the first element of the queue and assign it to `currentPath`
    const currentPath = queue.shift();

    // Get the last node of `currentPath`
    const currentNode = currentPath[currentPath.length - 1];

      if (currentNode === end) return currentPath.length - 1

      // Add all unseen neighbors of `currentNode` to the queue
      for (const neighbor of adjList[currentNode]) {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);

          queue.push([...currentPath, neighbor]);
        }
      }
    }
return false

}


console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false




function findNeighbors(node, matrix) {
  let row = node[0];
  let col = node[1];
  const neigbors = [];
  const currentLocation = matrix[row][col];
  // Don't forget to include diagonal neighbors!!!

  if (matrix[row - 1] && matrix[row - 1][col - 1])
    neigbors.push([row - 1, col - 1]);
  if (matrix[row - 1] && matrix[row - 1][col + 1])
    neigbors.push([row - 1, col + 1]);
  if (matrix[row - 1] && matrix[row - 1][col]) neigbors.push([row - 1, col]);
  if (matrix[row][col - 1]) neigbors.push([row, col - 1]);
  if (matrix[row][col + 1]) neigbors.push([row, col + 1]);
  if (matrix[row + 1] && matrix[row + 1][col]) neigbors.push([row + 1, col]);
  if (matrix[row + 1] && matrix[row + 1][col - 1])
    neigbors.push([row + 1, col - 1]);
  if (matrix[row + 1] && matrix[row + 1][col + 1])
    neigbors.push([row + 1, col + 1]);

  return neigbors.filter((neigbor) => {
    const [row, col] = neigbor;
    const nextVal = matrix[row][col];
    return (
      currentLocation === nextVal - 1 || currentLocation === nextVal ||currentLocation === nextVal + 1
    );
  });
}

function pathTraversal(node, matrix, visited = new Set(), peak) {
  // matrix[node[0]] [node[1]]
  // console.log(matrix, "THIS IS THE MATRIX");

  const queue = [[node]];
  while (queue.length > 0) {
    const currentPath = queue.shift();
    // console.log(currentPath, "THIS IS MY CURRENTPATH!!!!!!")
    // console.log(queue, "THIS IS THE QUEUE")
    const currentNode = currentPath[currentPath.length - 1]
     const value = matrix[currentNode[0]][currentNode[1]];
      // console.log(value, "THIS IS VALUE FROM THE NODE");
      if (value === peak) return true;
      // console.log(matrix)

      const neighbors = findNeighbors(currentNode, matrix)
      for (const neighbor of neighbors) {
        if (!visited.has(`${neighbor}`)) {
          visited.add(`${neighbor}`);
          queue.push([...currentPath,neighbor]);
          // if(matrix[neighbor[0]][neighbor[1]] === peak) return true
          // console.log(matrix[neighbor[0]][neighbor[1]])
          // console.log(neighbor, "NEIGHBOR?");

        }

    }
  }

  return false;
}

function identifyPath(mountain) {
  // Find the peak
  const peak = findPeak(mountain)
  // Find the start
  const starts = findStarts(mountain)
  // Traverse from the starts and try to get to the top
  for(const reachingPeak of starts){
  // console.log(mountain, "****************")
  // console.log(reachingPeak, "****************")
   const traverse = pathTraversal(reachingPeak, mountain, new Set(), peak)
   if(traverse) return reachingPeak

  // Your code here
}
return false
}
function getNeighbors(row, col, matrix) {
  const neighbors = [
    [row, col + 1],
    [row, col - 1],
    [row + 1, col + 1],
    [row + 1, col - 1],
    [row - 1, col - 1],
    [row - 1, col + 1],
    [row + 1, col],
    [row - 1, col],
  ];
  return neighbors.filter((neighbor)=>{
    const [r, c] = neighbor
    return matrix[r] && matrix[r][c]
    })

}
function countIslands(matrix) {
  // Create a visited set to store visited nodes
  const visited = new Set();

  // Initialize count to 0
  let count = 0;

  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If an index contains a 1 and has not been visited,
      // If cell is unvisited and contains a 1
      if (matrix[row][col] === 1 && !visited.has(String([row, col]))) {
        // Increment count and mark cell as visited
        // DO THE THING (increment island count by 1)
        // increment island count and start traversing neighbors
        // console.log(matrix[row][col], '++++++++++++++++++++++++')
        count++;
        // Add stringified version of current index to the visited set
        visited.add(String([row, col]));

        // Create stack to perform iterative search on neighbors
        const stack = [[row, col]];

        // While stack contains elements
        while (stack.length > 0) {
          // Initialize a stack with current index
          // Pop element from stack
          let [row, col] = stack.pop();
          const neighbors = getNeighbors(row, col, matrix);

          // Perform iterative search on neighbors
          // Iterate over neigbors
          for (const [neighborRow, neighborCol] of neighbors) {
            // If neighbor has not been visited
            if (
              matrix[neighborRow][neighborCol] === 1 &&
              !visited.has(String([neighborRow, neighborCol]))
            ) {
              // Mark neighbor as visited
              // Get valid neighbors of current element
              visited.add(String([neighborRow, neighborCol]));
              // Add neighbor to stack
              stack.push([neighborRow, neighborCol]);
            }
          }
        }
      }
    }
  }

  // Return count of islands
  // Return island count
  return count;
}

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
