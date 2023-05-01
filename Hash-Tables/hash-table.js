const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(numBuckets).fill(null)


  }

  hash(key) {
    // Your code here
    const hash  = sha256(key)
    const integer = parseInt(hash.slice(0, 8), 16)
    return integer
  }

  hashMod(key) {
 return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    const keyVal = new KeyValuePair(key, value)
    const index = this.hashMod(key)
    if(this.data[index] !== null) throw new Error("'hash collision or same key/value pair already exists!'")
    this.data[index] = keyVal
    this.count++
    return this

  }

  insertWithHashCollisions(key, value) {
    const keyVal = new KeyValuePair(key, value)
    const index = this.hashMod(key)
    if(this.data[index]){
      keyVal.next = this.data[index]
      this.data[index] = keyVal
    }else{
      this.data[index] = keyVal
    }
   this.count++
  }

  insert(key, value) {
    const index = this.hashMod(key)
   let current = this.data[index]
    while(current && current.key !== key){
      current = current.next
    }if(current){
      current.value = value
    }else{
      let keyValueP = new KeyValuePair(key, value)
      if(!this.data[index]){
      this.data[index] = keyValueP
    }else{
      keyValueP.next = this.data[index]
      this.data[index] = keyValueP
    }
    this.count++
}
}
}




module.exports = HashTable;
