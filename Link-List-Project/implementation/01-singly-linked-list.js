// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const node = new SinglyLinkedNode(val)
        this.length++
        if(this.length === 0){
            this.head = node
            return this

        }else{
            node.next = this.head
            this.head = node
            return this

        }
        // Add node of val to head of linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        this.length++

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this
        }

        let current = this.head
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
        return this
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        // this.head.next = node
        // if(!this.head){
         if (this.head){
        const oldHead = this.head
        this.head = this.head.next;
        this.length--
        return oldHead
        }
        else if(this.length === 0){
            return undefined

        }
                // Your code here
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head){
            return undefined

}else if ( this.length === 1){
    this.length--
    let old = this.head
    this.head = null
    return old
}

else{
let current = this.head
let previous;
while(current.next){
    previous = current
    current = current.next
}
previous.next = null
this.length--
return current
}
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node
if(!this.head ){
    return undefined
}else{
    return this.head.value
}
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
if(!this.head){
    return undefined
}else{
    let current = this.head
    while(current){
        console.log(current.value)
        current = current.next
    }
}
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
