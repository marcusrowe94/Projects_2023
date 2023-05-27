function binaryToString(binaryBlob) {
console.log(binaryBlob)
console.log('**************')

let string = "";
for( let i = 0; i < binaryBlob.length; i+= 8 ){
let byte = binaryBlob.slice(i, i + 8)
let letters = parseInt(byte, 2)
 string += String.fromCharCode(letters)
}
return string

}
/*
We will write a function to convert binary to string
We will use a for loop to go over this string to collect eight bits at a time
    We need to condence these binary bits to 1 byte and every eight bits will be 1 byte and every byte will be a letter

*/




/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;













// let binaryString = "";
// for (let i = 0; i < binaryBlob.length; i += 8) {
//   // Convert each 8 characters (1 byte) of binary to a decimal number
//   const byte = binaryBlob.slice(i, i + 8);
//   const decimal = parseInt(byte, 2);
//   // Convert the decimal number to a character and append to the binaryString
//   binaryString += String.fromCharCode(decimal);
// }
// return binaryString;
// }
