class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // if(this.count / this.capacity > 0.7) this.resize()
    let index = this.hashMod(key)
    let current = this.data[index]

    while(current && current.key !== key){
      current = current.next
    }

    if(current){
      current.value = value
      // console.log(this.data)


    }
    else{
    let keyValue = new KeyValuePair(key, value)
    keyValue.next = this.data[index]
    this.data[index] = keyValue

  }
    this.count++




  }

read(key) {
  this.length++
let index = this.hashMod(key)

let current = this.data[index]
if(!current){
  return undefined
}

while(current){
if(current.key === key){
   current.key = key
  current = current.next
}

}

}




  resize() {
    // Your code here
  }


  delete(key) {
    // Your code here
    let index = this.hashMod(key)
    // let keys = new KeyValuePair(key)
    let previous = this.data[index]
    if(!this.data.index){
      return
    }
    let current = this.data[index]
    console.log(this.data[index], key)
    while(current && current.key !== key){
         next = current.next
         previous = current
          current = next

    }
   /* current

    indx
    if no node
    return key not found
    prev
    while curr and curr key is not key
    update prev pont
    update next
    if we get through and prev or curr is false
    esle if no prev
  }*/
}
}


module.exports = HashTable;
