function returnsThree(n) {
  if( n === 3 ) return n
  else{

    return false
  }

}

function reciprocal(n) {
if(n < 1 || n > 10000000) throw new RangeError()
 return  n / 1;

}

module.exports = {
  returnsThree,
  reciprocal
};
