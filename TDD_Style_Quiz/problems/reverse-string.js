module.exports = function reverseString(string) {
  if(typeof string !== 'string'){
    throw new TypeError("This is not a string")
  }
  return string.split('').reverse().join("")
  // Your code here
};
