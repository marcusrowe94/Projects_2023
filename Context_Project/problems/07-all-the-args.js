function allTheArgs(func, ...args) {
  const bound3 = func.bind(func, ...args)
  return bound3 
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
