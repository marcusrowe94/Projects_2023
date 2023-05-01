function bindToAnArg(func, arg) {
return function(){
const bound2 = func.bind(func, arg)
return bound2()
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
