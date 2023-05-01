// 1.

function sum(array) {
  try{
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];

  if(!sum === null){
  return sum;
  }
}
}
  catch{
    throw new Error(" This is not a number")
  }
}

try{

let res = sum(null);
console.log(res);

} catch (e) {

  console.error(e);
}

// 2.
// tests
const sayName = ((name)=>{
  if(typeof name !== "string"){
    throw new Error( "this is not a string ")
  }

})
try {
  sayName("Alex");
  sayName(1);

} catch (e) {
  console.log(e)

}
// Your code here

// 3.
function greet(greeting) {
    try {

} catch (e) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

}
  try {
    greet()

  } catch (e) {
    console.log(e);

  }

}
