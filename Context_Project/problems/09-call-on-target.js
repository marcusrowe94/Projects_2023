function callOnTarget(func, obj1, obj2) {
const bound4 = func.bind(obj1, obj2)
return bound4(obj2)
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
