const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

  const word = new Word()

  describe("Word", function () {

    describe("Word constructor function", function () {
      it('should have a "word" property', function () {
        expect(word).to.have.property("word")
    });

    it('should set the "word" property when a new word is created', function () {

    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect.fail("replace with your code");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect.fail("replace with your code");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect.fail("replace with your code");
    });
  });
});
