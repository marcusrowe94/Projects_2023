/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.
const problemOne = document.getElementById("problem-one")
problemOne.innerHTML = `<button>${1}</button>`

// Your code here


// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

// Your code here
const square2 = document.querySelector(".square.two")
square2.style = "background-color: orange; color: white; border: 5px dashed black "

// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

// Your code here
const plus = document.querySelectorAll(".square.plus")
plus[0].style.width = "100px"
plus[0].style.fontSize = "60px"
plus[1].style.width = "100px"
plus[1].style.fontSize = "60px"

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

// Your code here
const problem4 = document.querySelector(".square.four")
problem4.id = "problem-four"
// problem4.className = "round"
problem4.classList.add("round")



// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// Your code here
const root = document.getElementById("root")
root.childNodes[9].classList.add("minus")

const minus = document.querySelectorAll('.minus')
// root.removeChild(minus[0])
// root.removeChild(minus[1])
// root.removeChild(minus[2])
const arr = Array.from(minus)
arr.forEach((el)=> el.remove())
console.log(arr)
