class Review{
     constructor(vehicle, tester, starRating, text,){
        this.vehicle = vehicle
        this.tester = tester
        this.starRating = starRating
        this.text = text



    }
    addReview(){
    this.vehicle.reviews.push(this)
    this.tester.reviews.push(this)
    }
  static filterByStars(rate, ...reviews){
 return reviews.filter(review => review.starRating === rate)

    }


}

module.exports = Review;
