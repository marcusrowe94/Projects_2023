const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

constructor(name, description, currentRoom, strength = 10, health = 100) {
super(name, "main character",description, currentRoom, strength = 10, health = 100)
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {


    let result = this.currentRoom.items.find((ele) => ele.name === itemName);
    this.items.push(result);
    this.currentRoom.items.splice(this.currentRoom.items.indexOf(result), 1);
  }

  dropItem(itemName) {
    let result = this.items.find((ele) => ele.name === itemName);
    this.currentRoom.items.push(result);
    this.items.splice(this.items.indexOf(result), 1)

  }

  eatItem(itemName) {
    const itemFound = this.items.find((ele) => ele.name === itemName);
    if(itemFound instanceof Food){
      this.currentRoom.items.push(itemFound);
      this.items.splice(this.items.indexOf(itemFound), 1)
    }
}

  getItemByName(name) {
  return this.items.find((item) => item.name === name)

  }

  hit(name) {

    // Fill this in

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player, Enemy, Food
};
