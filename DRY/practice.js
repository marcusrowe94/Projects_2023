// const dry = (num1, num2) => num1 > num2 ? num1 : num2;
function bigger(num1, num2){

  if( num1 > num2 ){
   return num1

 }else{
   return num2
 }
}

function multiplyBiggerNumByTwo(num1, num2) {

   return bigger(num1, num2) * 2

}

function divideBiggerNumByThree(num1, num2) {
 return bigger( num1, num2)/ 3
}

function eatMostTacos(sum1, sum2) {
 const mostTacos  = bigger(sum1, sum2)
 return`I ate ${mostTacos} tacos.`
}


function adoptSmallerDog(weight1, weight2) {
  const bigDog = bigger(weight1, weight2);
  if(bigDog === weight1){
    return `I adopted a dog that weighs ${weight2} pounds.`

  }else{
    return `I adopted a dog that weighs ${weight1} pounds.`
  }

}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
