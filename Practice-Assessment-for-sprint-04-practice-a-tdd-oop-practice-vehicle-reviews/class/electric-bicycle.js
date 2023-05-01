const Bicycle = require("./bicycle");

class ElectricBicycle extends Bicycle{
    constructor(name, year, price, style, frameSize, tireSize, range, maxSpeed ){
        super(name, year, price, style, frameSize, tireSize)
        // this.name = name
        // this.year = year
        // this.price = price
        this.style = style
        this.frameSize = frameSize
        this.tireSize = tireSize
        this.range = range
        this.maxSpeed = maxSpeed


    }

}

module.exports = ElectricBicycle, Bicycle;
