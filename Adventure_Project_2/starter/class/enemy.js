const {Character} = require('./character');
const { Room } = require('./room');


class Enemy extends Character {
  constructor(name, description, currentRoom, strength = 10, health = 100, cooldown = 3000) {
  super(name, description, currentRoom, strength, health)
this.currentRoom = currentRoom
this.cooldown = cooldown

  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
if(this.currentRoom === this.player.currentRoom) {
this.player.currentRoom = this.player.move().connectRoom(direction, connectingRoom);
      }
    }






  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
  }

  applyDamage(amount) {
    this.health -= amount
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }
}

module.exports = { Character,
    Enemy, Room
};
