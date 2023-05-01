class Vehicle {
    constructor(modelName, year, price, reviews = []){
        this.modelName = modelName
        this.year = year
        this.price = price
        this.reviews = reviews

    }
    validate(){
       if(this.year && this.modelName && this.price && this.year >= 1950 && this.year <= 2100){
        return true
    }
    else{
        return false
     }
    }
        update(modelName, year, price) {
            if (year < 1950 || year > 2100) {
                throw new Error("Year must be between 1950 and 2100")
            }
            if(price <= 0){
                throw new Error("Price must be greater than 0")
            }
            if( year !== this.year){
               this.year = year;
              }
           if (modelName !== this.modelName) {
              this.modelName = modelName;
            }
             if( price !== this.price){
                this.price = price
            }

          }
         printDetails(){
              return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`
                  }
         findReviewByTester(testerName) {
                    return this.reviews.find(review => review.tester.name === testerName);
                }
             }













// const vehicle1 = new Vehicle("Toyota Prius", 2005, 23000)
// const vehicle2 = new Vehicle("Trek 520", 2023, 1829)
// // let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);
// // let invalidVehicle = new Vehicle(5);




module.exports = Vehicle;
