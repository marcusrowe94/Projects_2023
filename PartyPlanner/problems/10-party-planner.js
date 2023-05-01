class PartyPlanner {
    constructor( guestList = [], partiesThrown = 0){
        this.guestList = guestList
        this.partiesThrown = partiesThrown


    }
    throwParty(){
        this.partiesThrown++
        if(!this.guestList.length){
            return "Gotta add people to the guest list"
        }
        else if(this.guestList.length === 2){
            return "Welcome to the party " + this.guestList.join(' and ')

        }else if (this.guestList.length === 1){
          return  "Welcome to the party " + this.guestList[0]

        }
        else{
            let str = "Welcome to the party "
            for (let index = 0; index < this.guestList.length; index++) {
                const element = this.guestList[index];
            if(index === this.guestList.length -1){
                str+= "and " + this.guestList[index]
            }else{
                str+= this.guestList[index] + ", "
            }
        }

        return str
    }
}
    addToGuestList(name){
    this.guestList.push(name)


}
pastPartyMembers(...name){
        if(this.addToGuestList(name)){
            return "A party for " + name + "has already been thrown"
     }

    }

}

module.exports =  PartyPlanner;
