function binaryToString(binaryBlob) {
  // console.log(binaryBlob)
  // console.log('*****************')
  let str = "";
  for (let i = 0; i < binaryBlob.length; i += 8) {
    let binaryChar = binaryBlob.slice(i, i + 8);
    base10 = parseInt(binaryChar, 2);

    str += String.fromCharCode(base10);
    // str += String.fromCharCode(`0b${binaryChar}`)

  }
  return str;
}

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'

module.exports = binaryToString;
