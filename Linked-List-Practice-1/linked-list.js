class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
this.head = head
this.length = 0
// this.prev;
  }

  addToHead(val) {
    let node = new LinkedListNode(val)
    this.length++
    if(!this.head){
      this.head = node

    }else{
     node.next = this.head
      this.head = node
    }
  }

  addToTail(val) {
  const node = new LinkedListNode(val)
  // OR !this.head
  if(this.length === 0){
  this.head = node
  return ++this.length;
  }
  let current = this.head
  while(current.next){
    current = current.next
  }
  current.next = node
  return ++this.length
}

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}
// let newList = new LinkedList()
// newList.addToHead("A")
// newList.addToHead("B")
// console.log(newList)
module.exports = LinkedList;
