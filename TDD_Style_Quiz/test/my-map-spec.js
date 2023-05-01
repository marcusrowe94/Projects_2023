const chai = require("chai")
const expect = chai.expect
const spies = require("chai-spies")
chai.use(spies)
const myMap = require("../problems/my-map")

describe("my-map", ()=>{
    let testArr;
    let answer;
    beforeEach(()=>{
        testArr =[1,2,3]
        answer = [2,4,6]

    })
    it("should return a new array.", ()=>{
        expect(myMap(testArr, () =>{})).to.be.an.instanceOf(Array)
        expect(myMap(answer, () =>{})).to.be.an.instanceOf(Array)
 })
  it("should not call the built in map", () => {
        const mapSpy = chai.spy.on(testArr, "map");
        myMap(inputArray, element => element + 1);
        expect(mapSpy).to.not.have.been.called();
      });

})
// describe("myMap()", () => {
//     let inputArray;

//     beforeEach(() => {
//       inputArray = [1, 2, 3];
//     });

//     it("should return a new array", () => {
//       expect(myMap(inputArray, () => {})).to.be.an.instanceOf(Array);
//     });
// })
