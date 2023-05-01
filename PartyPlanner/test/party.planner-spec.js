const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const PartyPlanner = require("../problems/10-party-planner.js");
console.log(PartyPlanner,'this is a test')
describe("PartyPlanner", function () {
  it("should return an object with a guestList property and throwParty and addToGuestList functions", function () {
    const party1 = new PartyPlanner();

    expect(party1.guestList).to.eql([]);
    expect(party1.throwParty).to.be.a("function");
    expect(party1.addToGuestList).to.be.a("function");
  });

  describe("addToGuestList()", () => {
    it("should intake a name and add it to the party guestList property", function () {
      const party1 = new PartyPlanner();
      party1.addToGuestList("James");
      const party2 = new PartyPlanner();
      party2.addToGuestList("Lucy");

      expect(party1.guestList).to.include("James");
      expect(party2.guestList).to.include("Lucy");
      expect(party2.guestList).not.to.include("James");
    });
  });

  describe("throwParty()", () => {
    context("with no guests added to the guestList", () => {
      it("should return a string requesting more guests", () => {
        const party1 = new PartyPlanner();

        expect(party1.throwParty()).to.eql(
          "Gotta add people to the guest list"
        );
      });
    });

    context("with people added to the list", () => {
      it("should throw a party with all the current guests", function () {
        const party1 = new PartyPlanner();
        expect(party1.throwParty()).to.eql(
          "Gotta add people to the guest list"
        );

        party1.addToGuestList("James");
        const party2 = new PartyPlanner();
        party2.addToGuestList("Lucy");

        expect(party1.throwParty()).to.equal("Welcome to the party James");
        expect(party2.throwParty()).to.equal("Welcome to the party Lucy");
        party1.addToGuestList("Derek");
        party2.addToGuestList("Johnny")
        expect(party1.throwParty()).to.equal("Welcome to the party James and Derek");
        expect(party2.throwParty()).to.equal("Welcome to the party Lucy and Johnny")

        party1.addToGuestList("Hercules");
        expect(party1.throwParty()).to.equal("Welcome to the party James, Derek, and Hercules")
      });
    });
  });

  describe("More specs", () => {
    it("each instance should have a property of partiesThrown", () => {
      const party1 = new PartyPlanner();
      expect(party1).to.have.property("partiesThrown");
    });

    it("partiesThrown starts at 0", () => {
      const party1 = new PartyPlanner();
      expect(party1.partiesThrown).to.equal(0);
    });

    it("increments by 1 for each throwParty invocation", () => {
      const party1 = new PartyPlanner();
      party1.addToGuestList("Hercules");
      expect(party1.throwParty()).to.equal("Welcome to the party Hercules")
      expect(party1.partiesThrown).to.equal(1)

      party1.addToGuestList("Fido");
      expect(party1.throwParty()).to.equal("Welcome to the party Hercules and Fido")
      expect(party1.partiesThrown).to.equal(2)
    });

    it("should return a different string if throwParty has the exact same guests as before", () => {
      const party1 = new PartyPlanner();
      party1.addToGuestList("Hercules");
      expect(party1.throwParty()).to.equal("Welcome to the party Hercules")
      expect(party1.throwParty()).to.equal("A party for Hercules has already been thrown")
    })

    it("accomplish ^ by adding a property pastPartyMembers with nested arrays", () => {
      const party1 = new PartyPlanner();
      expect(party1).to.have.property("pastPartyMembers")
      expect(party1.pastPartyMembers).to.eql([])

      party1.addToGuestList("Hercules");
      expect(party1.throwParty()).to.equal("Welcome to the party Hercules")
      expect(party1.pastPartyMembers).to.eql([["Hercules"]])

      party1.addToGuestList("Davy Jones");
      expect(party1.pastPartyMembers).to.eql([["Hercules"]])
      expect(party1.throwParty()).to.equal("Welcome to the party Hercules and Davy Jones")
      expect(party1.pastPartyMembers).to.eql([["Hercules"], ["Hercules", "Davy Jones"]])
    })

    it("lets make some more logic in the 'exact same guests' part", () => {
      const party1 = new PartyPlanner();
      party1.addToGuestList("Hercules");
      expect(party1.throwParty()).to.equal("Welcome to the party Hercules")
      expect(party1.throwParty()).to.equal("A party for Hercules has already been thrown")

      party1.addToGuestList("Davy Jones");
      expect(party1.throwParty()).to.equal("Welcome to the party Hercules and Davy Jones")
      expect(party1.throwParty()).to.equal("A party for Hercules and Davy Jones has already been thrown")

      party1.addToGuestList("O'really");
      expect(party1.throwParty()).to.equal("Welcome to the party Hercules, Davy Jones, and O'really")
      expect(party1.throwParty()).to.equal("A party for Hercules, Davy Jones, and O'really has already been thrown")
    })
  });
});
