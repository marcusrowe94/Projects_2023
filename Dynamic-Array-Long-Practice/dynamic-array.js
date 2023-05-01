class DynamicArray {

  constructor(defaultSize = 4) {
this.capacity = defaultSize
this.length = 0
this.data = new Array(this.capacity)
    // Your code here
  }

  read(index) {
    return this.data[index]

  }

  push(val) {
    for(let i = this.length; i < 0; i--){
     this.data[i] = this.data[i - 1]


    }
    this.data[this.data.length -1] = val
    this.length++

    // Your code here
  }


  pop() {

    // Your code here
  }

  shift() {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
