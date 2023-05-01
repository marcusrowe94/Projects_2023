const { Food } = require("./food");
const { Room } = require("./room");
const { Item } = require("./item");

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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
        // Picks up an item from the current room into the player's inventory
        // const result = this.items.splice(this.items.indexOf(itemName), 1);
        //   console.log(this.currentRoom[0])
        //   this.currentRoom.find()
        //   this.items.push(this.currentRoom.items[0]);

    let result = this.currentRoom.items.find((ele) => ele.name === itemName);
    this.items.push(result);
    this.currentRoom.items.splice(this.currentRoom.items.indexOf(result), 1);



        // for(let i =  0; i < this.items.length; i++){
        // const ele = this.items[i]
        //  if(ele in this.room && ele === itemName){
        //  this.items.push(itemName)
        // }





    //   this.items.splice(this.items.indexOf(itemName), 1)

// return this.getItemByName(itemName)
// return this.item.name.push(itemName)takeItem(itemName) {
    // Picks up an item from the current room into the player's inventory
        // Your code here
    }

    dropItem(itemName) {
        // Drops an item the player is holding into their current room
        let result = this.items.find((ele) => ele.name === itemName);
        this.currentRoom.items.push(result);
        this.items.splice(this.items.indexOf(result), 1)
        // Your code here
    }

    eatItem(itemName) {
        // Allow the player to eat food items, but not non-food items
        // if items are not food ignore
        let result = this.items.find((ele) => ele.name === itemName);
        if( result instanceof Food) this.items.splice(this.items.indexOf(result), 1)


        // Your code here
    }

    getItemByName(name) {
        // Retrieves an item from a player's inventory by item name
        return this.items.find((item) => item.name === name)
        // Your code here
    }
}

module.exports = {
  Player,
};
