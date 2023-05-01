// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        const node = new DoublyLinkedNode( val)
        // Add node of val to tail of linked list
            if(this.length === 0 ){
                this.head = node
                this.tail = node

            }else{const old = this.tail
                 node.prev = old
                 old.next = node
                 this.tail = node

            }
            this.length++
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if(!this.length){
            return
        }
        const oldHead = this.head
        const newHead = this.head.next
        if(newHead) {
         newHead.prev = null
         }
            this.head = newHead
            this.length--
            return oldHead.value
           // Your code here

        // Write your hypothesis on the time complexity of this method here
    }


    removeFromTail() {
        if(!this.length){
            return undefined
        }
        const oldTail = this.tail
        const newTail = oldTail.prev
        this.tail = newTail
        if(newTail){
        newTail.next = null
        }
        this.length--
        return oldTail.value

        // Remove node at tail

                //  }
                // the prev is the tail
 // the prev next is updated to null
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(!this.head){
            return undefined
        }else{
        return this.head.value
    }
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if(!this.head){
            return undefined
        }else{
        return this.tail.value
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}
}
module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
