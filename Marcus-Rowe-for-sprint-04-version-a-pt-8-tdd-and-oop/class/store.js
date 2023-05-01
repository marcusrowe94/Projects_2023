const PremiumCustomer = require("./premium-customer")
const StoreItem = require("./store-item")

class Store{
    constructor(){
        this.items = []

    }
    addItem(item){
    if(item.isValid()){
    this.items.push(item)
    }else{
        const addedStoreItem = new StoreItem(name)
    }

}
getStoreItemPrices(){
  return this.items.map((item)=> `${item.name}: $${item.price}`)

}
doTransaction(customer, itemName){
const found = this.items.find((item)=> item.name === itemName)
if (customer instanceof PremiumCustomer){
        found.price -= 1
//    customer.purchases.push(itemName)
    }
if( customer.money < found.price){
    throw new Error()
}



    customer.money -= found.price
    customer.purchases.push(itemName)

}

}




module.exports = Store
