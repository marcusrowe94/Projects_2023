class LinkedListNode {

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    // Default to empty
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {

    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {

    if (!this.head) {
        return null;
    }

    const returnValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return returnValue;
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

class User {

  constructor (name) {
    this.name = name;
  }
}

class UserRegistration {

  constructor (maxUsers = 4 ) {
    this.users = new Set()

    this.nameList = new LinkedList();
    this.maxUsers = maxUsers;

  }

  registerUser(username) {
    if (this.users.size === this.maxUsers) {
     // console.log(this.nameList.length)

     const userToRemove = this.nameList.dequeue(username);


     return(`${userToRemove} unregistered, ${username} registered`);
    }
     if (!this.users.has(username)) {
      const newUser = new User(username);
      this.users.add(newUser);
      this.nameList.enqueue(username);
      return(`${username} registered`);

  } else{

      return(`${username} failed to register`);

    }
  }

}

module.exports = {
  LinkedList,
  UserRegistration
};
