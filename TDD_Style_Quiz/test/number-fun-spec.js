require("chai")
const { expect } = require("chai")
// const numberFun = require("../problems")
const { returnsThree, reciprocal } = require("../problems/number-fun")
describe("returnsThree", function(){
   beforeEach(()=>{

        number = 3
        invalidNumber = false

    })
    it("Should return the number 3", function(){
        let three = 3;
        expect(returnsThree(number)).to.equal(three)

    })

})

describe("reciprocal", function(){
    beforeEach(()=>{
        n = 0
        answer = n / 1

    })
    it("should return the reciprocal of n", function(){

        let answer = n / 1
        expect(reciprocal(answer)).to.equal(answer)
    })
    it("args should be between 1 and 1,000,000", function(){
        expect(()=> reciprocal(0).to.throw(Error))
        try {
            reciprocal(0)
        } catch (e) {
            expect(e instanceof RangeError).to.eql(true)

        }

    })

})
