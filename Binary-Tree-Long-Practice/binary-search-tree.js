// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(val, currentNode = this.root) {
      if (!currentNode) return (this.root = new TreeNode(val));

      if (currentNode.val > val) {
        if (currentNode.left) {
          return this.insert(val, currentNode.left);
        }
        currentNode.left = new TreeNode(val);
      }

      if (currentNode.val < val) {
        if (currentNode.right) {
          return this.insert(val, currentNode.right);
        }
        currentNode.right = new TreeNode(val);
      }
    }

    // else return this.insert(val, currentNode.right)

    // }

    // }
    // Your code here

    search(val, root = this.root) {
      const queue = []
      queue.push(root)

      while(queue.length > 0){
        let node = queue.shift()
        if(node.val === val)return true
      if(node.left)  queue.push(node.left)
      if(node.right) queue.push(node.right)
      }
        return false
    }
      // if (!current)return false;
      // if (current.val === val) return true;
      //   const lefty = this.search(val, current.left);
      //   const righty = this.search(val, current.right);
      //   return  lefty || righty

      // }




    preOrderTraversal(currentNode = this.root) {
      const stack = []
       stack.push(currentNode)
       while(stack.length > 0){
        let node = stack.pop()
        // the queue uses shift FIFO and a breathfirstTraversal

        // the stack uses pop LIFO and would be a depthfirstTraversal
        console.log(node.val)

        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
       }


    }

    inOrderTraversal(currentNode = this.root) {
      // when in order its best to use depthfristTraversal recursivley to get to the bottom left
      if(!currentNode) return false
      if(currentNode.left) this.inOrderTraversal(currentNode.left)
        console.log(currentNode.val)
      if(currentNode.right) this.inOrderTraversal(currentNode.right)



      // Your code here
    }

    postOrderTraversal(currentNode = this.root) {
  if(!currentNode)return false

    if(currentNode.left) this.postOrderTraversal(currentNode.left)
    if(currentNode.right) this.postOrderTraversal(currentNode.right)
  console.log(currentNode.val)
  }



    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      const queue = []
      queue.push(this.root)
      while(queue.length > 0){

        let node = queue.shift()
        console.log(node.val)
     if(node.left) queue.push(node.left)
     if(node.right)queue.push(node.right)


      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      const stack = []
      stack.push(this.root)
      while(stack.length > 0){
      let node = stack.pop()
      if(node.left) stack.push(node.left)
      if(node.right)stack.push(node.right)
      console.log(node.val)
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };

// Your code here
