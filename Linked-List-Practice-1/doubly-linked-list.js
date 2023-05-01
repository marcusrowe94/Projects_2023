class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(head = null,tail = null) {
    this.head = head
    this.tail = tail
    this.length = 0
    // Your code here
  }

  addToHead(val) {
    const node = new DoublyLinkedListNode(val)
    this.length++
    if(!this.head){
      this.head = node
      this.tail = node
    }else{
      let previous = this.head
      node.next = previous
      previous.prev = node
      this.head = node
    }

  }

  addToTail(val) {
    const node = new DoublyLinkedListNode(val)
    if(this.length === 0){
      this.head = node
      this.tail = node
    }else{
      const previous = this.tail
      previous.next = node
      node.prev = previous
      this.tail = node
    }
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
