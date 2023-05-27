const Bicycle = require("./bicycle");
const ElectricBicycle = require("./electric-bicycle");
const Review = require("./review")

class Tester{
    constructor(name, reviews = []  ){
        this.name = name
        this.reviews = reviews


    }
    submitReview(vehicle, starRating, text){
        let submitted = new Review(vehicle,this, starRating, text, )
        if(vehicle.validate()){
            if(vehicle instanceof ElectricBicycle){
               this.eBikeTester = true

            }
            if(vehicle instanceof Bicycle){
                this.bikeTester = true

            }
                submitted.addReview();
                return submitted;
        }
        else {
        throw new Error("Cannot submit review for invalid vehicle.")
    }
}

}

// const tester1 = new Tester("Bob Jones")
// const tester2 = new Tester ("Janelle Price")
module.exports = Tester;
