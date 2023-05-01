class PartyPlanner{
	constructor(guestList = []){
		this.guestList = guestList
	}
	addToGuestList(name){
		 this.guestList.push(name)

	}
	throwParty(string = "Gotta add people to the guest list" ){
		if(!this.guestList.length){
		return string
		}
		else{
	return `Welcome to the party ${this.guestList.join(" and ")}`
		}

	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
