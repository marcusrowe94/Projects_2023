/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


  function reverse(str) {
    // Your code here
    if(str.length === 0){
      return "";
    }
    let lastIndex = str.slice(-1)
    let fullIndex = str.slice(0, -1)
    return lastIndex + reverse(fullIndex)
  }




/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
