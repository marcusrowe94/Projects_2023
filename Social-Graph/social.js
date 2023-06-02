// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    let newUser = { id: this.currentID, name: name };
    this.users[this.currentID] = newUser;
    const following = new Set();
    this.follows[this.currentID] = following;
    return this.currentID;
  }

  getUser(userID) {
    if (!this.users[userID]) return null;
    else return this.users[userID];
    // Your code here
  }

  follow(userID1, userID2) {
    if (!this.users[userID1] || !this.users[userID2]) return false;
    else this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    const follwers = new Set();
    for (const currentUsers in this.follows) {
      if (this.follows[currentUsers].has(userID)) {
        follwers.add(Number(currentUsers));
      }
    }
    return follwers;
  }

  getRecommendedFollows(
    userID,
    degrees,
    visited = new Set(),
    recommended = []
  ) {
    const queue = [[userID]];
    visited.add(String([userID]));
    while (queue.length) {
      const currentPath = queue.shift();
      const currentNode = currentPath.at(-1);
      if (currentPath.length > degrees + 2) return recommended;
      if (currentPath.length > 2) recommended.push(currentNode);
      const neighbors = this.getFollows(currentNode);
      for (const neighbor of neighbors) {
        if (!visited.has(String(neighbor))) {
          visited.add(String(neighbor))
          queue.push([...currentPath, neighbor]);
        }
      }
    }
    return recommended;
  }
}

module.exports = SocialNetwork;
