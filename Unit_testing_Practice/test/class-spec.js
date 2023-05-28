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
      const word = new Word('hello');
      expect(word.removeVowels()).equal('hll');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const word1 = new Word("Butterfly")
      expect(word1.removeConsonants()).equal("ue");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const word1 = new Word('apple');
    expect(word1.pigLatin()).equal('appleyay');

    const word2 = new Word('banana');
    expect(word2.pigLatin()).equal('ananabay');

    const word3 = new Word('hello');
    expect(word3.pigLatin()).equal('ellohay')
    });
  });
});
