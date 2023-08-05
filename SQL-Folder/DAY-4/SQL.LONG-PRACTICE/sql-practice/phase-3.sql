-- Your code
.mode column
INSERT INTO customers(name, phone)
VALUES("Rachel",1111111111);

UPDATE customers
SET points = 6
WHERE id = "Rachel";
INSERT INTO coffee DEFAULT VALUES;



INSERT INTO customers(name, email, phone)
VALUES
("Monica","monica@friends.show",2222222222),
("Phoebe", "phoebe@friends.show",3333333333);

UPDATE customers
SET points = 8
WHERE name = "Phoebe";
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;

UPDATE customers
SET points = 10
WHERE name = "Rachel";
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;


UPDATE customers
SET points = 9
WHERE name = "Monica";
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;

-- UPDATE coffee
-- SET is_redeemed = 1
-- WHERE id = 1;

INSERT INTO customers(name, email)
VALUES
("Joey","joey@friends.show"),
("Chandler", "chandler@friends.show"),
("Ross","ross@friends.show");

UPDATE customers
SET points = 11
WHERE name = "Ross";
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;
INSERT INTO coffee DEFAULT VALUES;

-- UPDATE coffee
-- SET is_redeemed = 0
-- WHERE id = 3;

SELECT * FROM coffee;
-- SELECT * FROM customers;
