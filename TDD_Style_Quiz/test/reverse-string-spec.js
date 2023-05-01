require("chai")
const { expect } = require("chai")
const reverseString = require("../problems/reverse-string")
describe('reverseString', function(){
    beforeEach(() =>{
        newWord = "thisIsaTestString"
        invalid = 12345;

    })

it("should throw an error if it is not a string, Should throw TypeError", function(){
    expect( () => reverseString(invalid)).to.throw(
        TypeError,"This is not a string"
    )

})

it("should reverse a given string", function(){
   let reversedWord = newWord.split("").reverse().join("")
   expect(reverseString(newWord)).to.equal(reversedWord)
})

})
