const Customer = require("./customer");

class PremiumCustomer extends Customer {
    constructor(name){
        super(name)
        this.money = 5 

    }
}
module.exports = PremiumCustomer
