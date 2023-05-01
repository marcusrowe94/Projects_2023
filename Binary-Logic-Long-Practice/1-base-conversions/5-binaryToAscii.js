const binaryToAscii = str => {
  let binaryString = "";
  for (let i = 0; i < str.length; i += 8) {
    // Convert each 8 characters (1 byte) of binary to a decimal number
    const byte = str.slice(i, i + 8);
    const decimal = parseInt(byte, 2);
    // Convert the decimal number to a character and append to the binaryString
    binaryString += String.fromCharCode(decimal);
  }
  return binaryString;
}

/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
'Hello, world'
