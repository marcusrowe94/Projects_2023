class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    breathFirstTraversal(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            const current = queue.shift()
            console.log(current.val)
            if(current.left)queue.push(current.left)
            if(current.right)queue.push(current.right)

        }
    }
    depthFirstTraversal(){
        const stack = []
        stack.push(this.root)
        while(stack.length){
            const current = stack.pop()
            if(current.right) stack.push(current.right)
            if(current.left) stack.push(current.left)
            console.log(current.val)

        }


    }



}
// Create an instance of BinarySearchTree
const bst = new BinarySearchTree();

// Create some tree nodes
const node1 = new TreeNode(5);
const node2 = new TreeNode(3);
const node3 = new TreeNode(7);
const node4 = new TreeNode(2);
const node5 = new TreeNode(4);
const node6 = new TreeNode(6);
const node7 = new TreeNode(8);

// Set up the tree structure
bst.root = node1;
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

// Test breadth-first traversal
console.log("Breadth-First Traversal:");
bst.breathFirstTraversal();

// Test depth-first traversal
console.log("Depth-First Traversal:");
bst.depthFirstTraversal();
