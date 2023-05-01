class DynamicArray {
constructor(defaultSize = 4) {
this.data = []
this.capacity = defaultSize
this.length = 0
this.data.length = defaultSize
}


  read(index) {
   return this.data[index]


  }

  unshift(val) {
    if (this.length === this.capacity) {
      // Resize the array if it's full
      this.resize(this.capacity * 2);
    }

    // Shift elements to the right to make space for new value
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val
    this.length++;
  }

  resize(newCapacity) {
    const newData = new Array(newCapacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
    this.capacity = newCapacity;
  }

}


module.exports = DynamicArray;
