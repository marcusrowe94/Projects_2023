const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  const stack = [];
  let min = rootNode.val;
  stack.push(rootNode);
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val < min) {
      min = node.val;
    }
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return min;

  // Your code here
}

function findMaxBST(rootNode) {
  const queue = [];
  let max = rootNode.val;
  queue.push(rootNode);
  while (queue.length > 0) {
    let node = queue.shift();
    if (max < node.val) max = node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return max;
}

function findMinBT(rootNode) {
  let min = rootNode.val;
  if (rootNode.left) min = Math.min(findMinBT(rootNode.left), min);
  if (rootNode.right) min = Math.min(findMinBT(rootNode.right), min);
  return min;
}

function findMaxBT(rootNode) {
  const queue = [];
  let max = rootNode.val;
  queue.push(rootNode);
  while (queue.length > 0) {
    let node = queue.shift();
    if (max < node.val) max = node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) {
    return -1;
}
if (!rootNode.left && !rootNode.right) {
    return 0;
}
let leftHeight = getHeight(rootNode.left);
let rightHeight = getHeight(rootNode.right);

return Math.max(leftHeight, rightHeight) + 1;

}
// if (!rootNode) return -1;

// const left = getHeight(rootNode.left);

// const right = getHeight(rootNode.right);

// return Math.max(left, right) + 1

function balancedTree(rootNode) {
  const stack = [];
  stack.push(rootNode);
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.left) {
      stack.push(node.left);
    }
    let heightLeft = getHeight(node.left);
    if (node.right) {
      stack.push(node.right);
    }
    let heightRight = getHeight(node.right);

    if (Math.abs(heightRight - heightLeft) > 1) return false;
  }
  return true;
}

function countNodes(rootNode) {
  let count1 = 0;
  let count2 = 0;
  const stack = [];
  stack.push(rootNode);
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.left) {
      stack.push(node.left);
      count1++;
    }
    if (node.right) {
      stack.push(node.right);
      count2++;
    }
  }
  return count1 + count2 + 1; // rootNode
}

function getParentNode(rootNode, target) {
  const queue = [];
  queue.push(rootNode);
  while (queue.length > 0) {
    let node = queue.shift();
    // if (target === rootNode) {
    //   return true;
    // }
    if (target === rootNode.val) {
      return null;
    }
    if (node.left) {
      queue.push(node.left);
      if (node.left.val === target) return node;
    }
    if (node.right) {
      queue.push(node.right);
      if (node.right.val === target) return node;
    }
  }
  return;
}

function inOrderPredecessor(rootNode, target, order = []) {
  if(!rootNode)return;

  if(rootNode.left) inOrderPredecessor(rootNode.left, target, order);
  order.push(rootNode.val);
  if (rootNode.right) inOrderPredecessor(rootNode.right, target, order);
  // console.log(order)
  let indexOfTarget = order.indexOf(target)
  let predecessor = order[indexOfTarget - 1]
  if(indexOfTarget === 0) return null;
  return predecessor
  // console.log(predecessor)






}
// function inOrderPredecessor(rootNode, target) {
//   let stack = [];
//   let prev = null;

//   while (rootNode || stack.length > 0) {
//     while (rootNode) {
//       stack.push(rootNode);
//       rootNode = rootNode.left;
//     }

//     rootNode = stack.pop();

//     if (rootNode.val === target) {
//       return prev ? prev.val : null;
//     }

//     prev = rootNode;
//     rootNode = rootNode.right;
//   }

//   return null;
// }


function deleteNodeBST(rootNode, target) {
    // Do a traversal to find the node. Keep track of the parent
    const parent = getParentNode(rootNode, target);

    let targetNode;
    let direction;

    // Set target based on parent
    if (parent && parent.left && parent.left.val === target) {
        targetNode = parent.left;
        direction = "left";
    }
    if (parent && parent.right && parent.right.val === target) {
        targetNode = parent.right;
        direction = "right";
    }

    if (rootNode.val === target) targetNode = rootNode;

    // Undefined if the target cannot be found
    if (!targetNode) return targetNode;

    // Case 0: Zero children and no parent:
    //   return null
    if (!parent && !targetNode.left && !targetNode.right) return null;

    // Case 1: Zero children:
    //   Set the parent that points to it to null
    if (parent && !targetNode.left && !targetNode.right) {
        parent[direction] = null;
        return;
    }

    // Case 3: One child:
    //   Make the parent point to the child
    if (parent && targetNode.left && !targetNode.right) {
        parent[direction] = targetNode.left;
        return;
    }
    if (parent && !targetNode.left && targetNode.right) {
        parent[direction] = targetNode.right;
        return;
    }

    // Case 2: Two children:
    //  Set the value to its in-order predecessor, then delete the predecessor
    //  Replace target node with the left most child on its right side,
    //  or the right most child on its left side.
    //  Then delete the child that it was replaced with.
    const pre = inOrderPredecessor(rootNode, target);
    targetNode.val = pre;

    if (targetNode.left && targetNode.left.val === pre) targetNode.left = null;
    if (targetNode.right && targetNode.right.val === pre)
        targetNode.right = null;

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
