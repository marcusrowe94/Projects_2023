class StoreItem{
    constructor(name, price){
        this.name = name
        this.price = price


    }
    isValid(){
        if(!this.name || this.price <= 0){
            return false

        }else{
            return true
        }
    }
  static compareItems(item1, item2){
    if(item1.price < item2.price){
        return item1

    }else{
        return item2
    }


  }
 static sumItems(...items){
    let sum = 0
    items.forEach(item => {
 sum += item.price
   })
   return sum
}
}
module.exports = StoreItem
