
class Dragon {
  constructor(name , color){
    this.name = name
    this.color = color

  }
    breathesFire(){
return `${this.name} breathes fire everywhere! BURN!!!!`
    }
    static getDragons(...args){
      let arr = []
      for( let i = 0; i < args.length; i++){
        let dragons = args[i]
        arr.push(dragons.name)

    }
    return arr
    }
}
const Dragon1 = new Dragon("Toothless", "black")
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
