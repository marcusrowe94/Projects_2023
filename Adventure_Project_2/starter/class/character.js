
class Character {

constructor(name, description, currentRoom, strength = 10, health = 100) {
    // Fill this in
this.name = name
this.description = description
this.currentRoom = currentRoom
this.strength = strength
this.health = health
this.items = []
  }

  applyDamage(amount) {
    this.health -= amount
    if(this.health <= 0){
      this.die()
    }

  }

die() {
  // this.currentRoom.items.push(...this.items);
  this.items.forEach(item =>  this.currentRoom.items.push(item));

  this.items = [];
  this.currentRoom = null;
  }

  // if(this.applyDamage(this.health)&& this.health <=0){


  // }
}
  // let index = this.currentRoom.name.indexOf(this);
  // if (index !== -1) {
    //   this.currentRoom.name.splice(index, 1);
    // }







// Remove character from the current room

// Update current room to null



    // this.items.forEach(item => {


      //  this.health === 0 || this.health === null
    // let result = this.items.find((ele) => ele.name === itemName);
    // this.currentRoom.items.push(result);
    // this.items.splice(this.items.indexOf(result), 1)


module.exports = {Character}
