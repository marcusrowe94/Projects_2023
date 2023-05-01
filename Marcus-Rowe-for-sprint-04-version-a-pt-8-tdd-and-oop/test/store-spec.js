const { expect } = require("chai");

const Customer = require("../class/customer.js");
const PremiumCustomer = require("../class/premium-customer.js");
const Store = require("../class/store.js");
const StoreItem = require("../class/store-item.js");

describe("Customer", function () {

  it("should set username on creation, and should have money and purchases attributes", function () {
    let customer1 = new Customer("LeBron James");
    let customer2 = new Customer("Marilyn Monroe");

    expect(customer1.name).to.equal("LeBron James");
    expect(customer2.name).to.equal("Marilyn Monroe");

    expect(customer1.money).to.equal(0);
    expect(customer2.money).to.equal(0);

    expect(customer1.purchases).to.deep.equal([]);
    expect(customer2.purchases).to.deep.equal([]);
  });


  it("should allow customers to add and withdraw funds, without withdrawing more funds than they own", function () {
    let customer1 = new Customer("LeBron James");
    let customer2 = new Customer("Marilyn Monroe");

    customer1.addFunds(10);
    expect(customer1.money).to.equal(10);
    customer1.addFunds(20);
    expect(customer1.money).to.equal(30);

    customer1.withdrawFunds(3);
    expect(customer1.money).to.equal(27);
    customer1.withdrawFunds(13);
    expect(customer1.money).to.equal(14);

    expect(customer1.withdrawFunds.bind(customer1, 15)).to.throw(Error);

    customer2.addFunds(20);
    expect(customer2.withdrawFunds.bind(customer2, 25)).to.throw(Error);
  });
});


describe("Store Item class", function () {

  it("should set item name and price on creation", function () {
    let storeItem1 = new StoreItem("Chair", 10);
    let storeItem2 = new StoreItem("Desk", 25);

    expect(storeItem1.name).to.equal("Chair");
    expect(storeItem1.price).to.equal(10);

    expect(storeItem2.name).to.equal("Desk");
    expect(storeItem2.price).to.equal(25);
  });


  it("should not be valid unless the name and price have been set", function () {
    let storeItemValid1 = new StoreItem("Chair", 10);
    let storeItemBlank1 = new StoreItem();
    let storeItemInvalidPrice1 = new StoreItem("Bad Chair", -1);

    let storeItemValid2 = new StoreItem("Desk", 25);
    let storeItemBlank2 = new StoreItem();
    let storeItemInvalidPrice2 = new StoreItem("Bad Desk", 0);

    expect(storeItemValid1.isValid()).to.be.true;
    expect(storeItemBlank1.isValid()).to.be.false;
    expect(storeItemInvalidPrice1.isValid()).to.be.false;

    expect(storeItemValid2.isValid()).to.be.true;
    expect(storeItemBlank2.isValid()).to.be.false;
    expect(storeItemInvalidPrice2.isValid()).to.be.false;
  });


  it("can compare the price of two items and return the cheaper item", function () {
    let storeItem1 = new StoreItem("Chair", 10);
    let storeItem2 = new StoreItem("Desk", 25);
    let storeItem3 = new StoreItem("Couch", 700);

    expect(StoreItem.compareItems(storeItem1, storeItem2)).to.equal(storeItem1);
    expect(StoreItem.compareItems(storeItem3, storeItem2)).to.equal(storeItem2);
  });


  it("can return the sum of multiple item prices added together", function () {
    let storeItem1 = new StoreItem("Chair", 10);
    let storeItem2 = new StoreItem("Desk", 25);
    let storeItem3 = new StoreItem("Couch", 700);

    expect(StoreItem.sumItems(storeItem1, storeItem2)).to.equal(35);
    expect(StoreItem.sumItems(storeItem1, storeItem2, storeItem3)).to.equal(735);
    expect(StoreItem.sumItems(storeItem1, storeItem1, storeItem1, storeItem1)).to.equal(40);
  });
});


describe("Store class", function () {

  it("should allow valid store items to be added", function () {
    let store = new Store();
    let storeItem1 = new StoreItem("Chair", 10);
    let storeItem2 = new StoreItem("Desk", 25);

    expect(store.items.length).to.equal(0);
    store.addItem(storeItem1);
    expect(store.items.length).to.equal(1);
    expect(store.items[0]).to.deep.equal({ name: 'Chair', price: 10 });

    store.addItem(storeItem2);
    expect(store.items.length).to.equal(2);
    expect(store.items[1]).to.deep.equal({ name: 'Desk', price: 25 });

    expect(store instanceof StoreItem).to.not.be.true;
    expect(store instanceof Store).to.be.true;
    expect(storeItem1 instanceof Store).to.not.be.true;
    expect(storeItem1 instanceof StoreItem).to.be.true;
  });


  it("should not allow invalid store items to be added", function () {
    let store = new Store();
    let storeItemInvalid1 = new StoreItem("Bad Chair", -10);
    let storeItemInvalid2 = new StoreItem("Bad Desk", -25);

    expect(store.addItem.bind(store, storeItemInvalid1)).to.throw(Error);
    expect(store.addItem.bind(store, storeItemInvalid2)).to.throw(Error);
    expect(store.items.length).to.equal(0);
  });


  it("should return a list of store items and prices in the order they were added", function () {
    let store = new Store();
    let storeItemMug = new StoreItem("Mug", 3);
    let storeItemChair = new StoreItem("Chair", 10);
    let storeItemTable = new StoreItem("Table", 20);

    let expectedReturn1 = ["Mug: $3", "Chair: $10", "Table: $20"];
    let expectedReturn2 = ["Mug: $3", "Chair: $10", "Table: $20", "Table: $20", "Chair: $10", "Mug: $3" ];

    store.addItem(storeItemMug);
    store.addItem(storeItemChair);
    store.addItem(storeItemTable);

    expect(store.getStoreItemPrices()).to.deep.equal(expectedReturn1);

    store.addItem(storeItemTable);
    store.addItem(storeItemChair);
    store.addItem(storeItemMug);

    expect(store.getStoreItemPrices()).to.deep.equal(expectedReturn2);
  });
});


describe("Premium Customer", function () {

  it("should inherit from the base customer class, and start with $5 on creation", function () {
    let premiumCustomer1 = new PremiumCustomer("Kobe Bryant");
    let premiumCustomer2 = new PremiumCustomer("Marilyn Monroe");

    expect(premiumCustomer1.name).to.equal("Kobe Bryant");
    expect(premiumCustomer1.money).to.equal(5);
    expect(premiumCustomer2.name).to.equal("Marilyn Monroe");
    expect(premiumCustomer2.money).to.equal(5);

    expect(premiumCustomer1 instanceof Customer).to.be.true;
    expect(premiumCustomer1 instanceof PremiumCustomer).to.be.true;
    expect(premiumCustomer2 instanceof Customer).to.be.true;
    expect(premiumCustomer2 instanceof PremiumCustomer).to.be.true;
  });
});

describe("Completing a Purchase", function () {

  it("allows a customer to purchase items with sufficient funds", function () {
    let store = new Store();
    let customer = new Customer("Larry Bird");
    let storeItemMug = new StoreItem("Mug", 3);
    let storeItemChair = new StoreItem("Chair", 10);
    let storeItemTable = new StoreItem("Table", 20);

    store.addItem(storeItemMug);
    store.addItem(storeItemChair);
    store.addItem(storeItemTable);

    customer.addFunds(25);

    store.doTransaction(customer, "Chair");

    expect(customer.money).to.equal(15);
    expect(customer.purchases).to.deep.equal(["Chair"]);

    store.doTransaction(customer, "Mug");

    expect(customer.money).to.equal(12);
    expect(customer.purchases).to.deep.equal(["Chair", "Mug"]);
  });


  it("does not allow a customer to purchase items if they do not have sufficient funds", function () {
    let store = new Store();
    let customer = new Customer("Larry Bird");
    let storeItemMug = new StoreItem("Mug", 3);
    let storeItemChair = new StoreItem("Chair", 10);
    let storeItemTable = new StoreItem("Table", 20);

    store.addItem(storeItemMug);
    store.addItem(storeItemChair);
    store.addItem(storeItemTable);

    customer.addFunds(25);

    store.doTransaction(customer, "Chair");

    expect(customer.money).to.equal(15);
    expect(customer.purchases).to.deep.equal(["Chair"]);

    store.doTransaction(customer, "Mug");

    expect(customer.money).to.equal(12);
    expect(customer.purchases).to.deep.equal(["Chair", "Mug"]);

    expect(() => store.doTransaction.call(store, customer, "Table")).to.throw(
      Error
    );

    expect(customer.money).to.equal(12);
    expect(customer.purchases).to.deep.equal(["Chair", "Mug"]);

    expect(() =>
      store.doTransaction.call(store, customer, "Television")
    ).to.throw(Error);
    expect(customer.purchases).to.deep.equal(["Chair", "Mug"]);
  });


  it("gives premium customers a $1 discount on all purchases", function () {
    let store = new Store();
    let premiumCustomer = new PremiumCustomer("Michael Jordan");
    let storeItemMug = new StoreItem("Mug", 3);
    let storeItemChair = new StoreItem("Chair", 10);
    let storeItemTable = new StoreItem("Table", 20);

    store.addItem(storeItemMug);
    store.addItem(storeItemChair);
    store.addItem(storeItemTable);

    premiumCustomer.addFunds(25);

    store.doTransaction(premiumCustomer, "Chair");

    expect(premiumCustomer.money).to.equal(21);
    expect(premiumCustomer.purchases).to.deep.equal(["Chair"]);

    store.doTransaction(premiumCustomer, "Mug");

    expect(premiumCustomer.money).to.equal(19);
    expect(premiumCustomer.purchases).to.deep.equal(["Chair", "Mug"]);

    store.doTransaction(premiumCustomer, "Table");

    expect(premiumCustomer.money).to.equal(0);
    expect(premiumCustomer.purchases).to.deep.equal(["Chair", "Mug", "Table"]);
  });
});
