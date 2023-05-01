// write a function called myIndexOf and take in array of numbers and target number
// using a for loop we will go through the array
    // we will check to see if the target is equal to the element in the array
        // when the condition is met we will return the index of where it was found an
// if we have checked all elements in the array and the target is not found return -1
//
//function printBreadthFirst(start) {
//     const queue = [start]
//     const seen = new Set(queue)
//     while(queue.length){
//     let node = queue.shift()
//     console.log(node)
//         adjList[node].forEach((node)=>{
//             if(!seen.has(node)){
//                seen.add(node)
//               queue.push(node)
//             }

//         })


//       }

//   }
// console.log("First Test:")
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                       // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                       // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                       // One possible solution:  4, 3, 5, 6, 2, 1

//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4]
// }
// function printDepthFirst(start) {
//     const stack = [start]
//     const seen = new Set(stack)
//     while(stack.length > 0){
//    let node = stack.pop()
//    console.log(node)
//     for(const neighbor of adjList[node]){
//       if(!seen.has(neighbor)){
//         seen.add(neighbor)
//         stack.push(neighbor)
//       }


//     }

//   }

// }
// console.log("First Test:")
// printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
//                     // One possible solution:  3, 4, 6, 5, 1, 2
// console.log("Second Test:")
// printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
//                     // One possible solution:  6, 4, 5, 2, 1, 3
// console.log("Third Test:")
// printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
//                     // One possible solution:  4, 6, 5, 2, 1, 3
// function breadthFirstSearch(start, end) {const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5],
//     5: [1, 2, 4],
//     6: []
// }

// function breadthFirstSearch(start, end) {
//     const queue = [start]
//     const seen = new Set(queue)
//     while(queue.length > 0){
//       let node = queue.shift()
//       // console.log(node)
//       for(const neighbor of adjList[node]){
//         if(!seen.has(neighbor)){
//           seen.add(neighbor)
//           queue.push(neighbor)

//     // need to add to the end of the queue
//         }
//         if(seen.has(end)){
//           return true
//       }
//     }
// }
//   return false
// }

// const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5],
//     5: [1, 2, 4],
//     6: []
// }

// function aShortestPath(start, end) {
//   const queue = [[start]]
//   const seen = new Set(queue)
//   while(queue.length){
//    let node = queue.shift()
//    let last = node[node.length -1]
//    if(last === end){
//        return node
//      }
//    for(const neighbor of adjList[last]){
//      if(!seen.has(neighbor)){
//         seen.add(neighbor)
//        	queue.push([...node, neighbor])
//      }

//     }


//   }
//   return false


// }

// console.log("First Test:");
// console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false



//   for (let i = 0; i < array.length; i++) {
    // let map = {};
//     let value = array[i];
//     if (map[value] !== target) {
//       map[value] = i;
//     } else if (map[value] === target) return map[value], i;
//     else{
//         return -1
//     }

//     console.log(map)
//   }
