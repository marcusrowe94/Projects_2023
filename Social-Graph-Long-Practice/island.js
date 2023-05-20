function getNeighbors(row, col, graph) {
  const neighbors = [
    [row + 1, col], //UP
    [row - 1, col], // DOWN
    [row, col - 1], // LEFT
    [row, col + 1], // RIGHT
  ];
  return neighbors.filter((neighbor) => {
    const [row, col] = neighbor;
    // console.log(graph[row][col])
    return graph[row] && graph[row][col];
  });
}

function islandSize(row, col, graph, visited = new Set(), size = 0) {
  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];
  // Initialize size to 0
  // While the stack is not empty,
  while (stack.length) {
    const currentNodeCoordinates = stack.pop();
    visited.add(String(currentNodeCoordinates));
    size++;
    console.log(currentNodeCoordinates,"THE THING IM LOOKING FOR ***************************")
    const [row, col] = currentNodeCoordinates
    const neighborHood = getNeighbors(row, col, graph);
    for (const neighbor of neighborHood) {
      if (!visited.has(String(neighbor))) {
        visited.add(String(neighbor))
        stack.push(neighbor)
      }
    }
  }
  return size
}

  // Pop the first node

  // Put the stringified starting node in visited

  // DO THE THING (increment size by 1)
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!
  // and mark them as visited

  // Then push all the UNVISITED neighbors on top of the stack

  // Your code here


module.exports = [getNeighbors, islandSize];
