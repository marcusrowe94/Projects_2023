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
      if (+currentUsers === userID) continue;
      if (this.follows[currentUsers].has(userID)) {
        follwers.add(+currentUsers);
      }
    }
    return follwers;
  }

  getRecommendedFollows(userID, degrees, unique = new Set(), recommended = []) {
   let following = this.follows[userID];
   unique.add(userID)

for (const usersFollowing of following) {
 for (const twoDeep of this.follows[usersFollowing]){
  if(!unique.has(twoDeep)){
    unique.add(twoDeep)
    recommended.push(twoDeep)
  }
 }
}
if(degrees > 1){
for(const usersFollowing of following){
  this.getRecommendedFollows(usersFollowing, degrees - 1, unique, recommended)
}
}
return recommended
}
// const queue = [[userID]]
// const visited = new Set()
// const friends = []
// // console.log(queue)
// while(queue.length){
//   let currentPath = queue.shift()
//   let currentNode = currentPath[currentPath - 1]
//   if(!visited.has(currentNode)){
//     visited.add(currentNode)
//     console.log(currentPath.length)
//     if(currentPath.length > 1 && currentPath.length <= degrees + 1){
//       friends.push(currentNode)
//       console.log(friends)

//     }

// }
// }
// }
// }


//     }
//   }
// }
}


module.exports = SocialNetwork;
