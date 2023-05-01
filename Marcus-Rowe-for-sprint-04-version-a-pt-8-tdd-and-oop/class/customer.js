class Customer{
    constructor(name){
        this.name = name
        this.money = 0
        this.purchases = []

    }
    addFunds(n){
        this.money += n

    }
    withdrawFunds(n){
        this.money -= n
        if(this.money <= 0 ){
            throw new Error()


        }

    }
}

module.exports = Customer
