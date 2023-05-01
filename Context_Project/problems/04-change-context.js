function changeContext(func, obj) {
const bound = func.bind(obj)
return bound()
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
