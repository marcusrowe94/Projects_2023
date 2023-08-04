-- Your code
.mode column
INSERT INTO customers(name, phone)
VALUES("Rachel",1111111111);

UPDATE customers
SET points = 6
WHERE id = 1;

SELECT points FROM customers WHERE id = 1;

INSERT INTO customers(name, email, phone)
VALUES
("Monica","monica@friends.show",2222222222),
("Phoebe", "phoebe@friends.show",3333333333);

UPDATE customers
SET points = 8
WHERE id = 3;

UPDATE customers
SET points = 10
WHERE id = 1;

UPDATE customers
SET points = 9
WHERE id = 2;
UPDATE customers
SET is_redeemed = 
WHERE id = 1;

INSERT INTO customers(name, email)
VALUES
("Joey","joey@friends.show"),
("Chandler", "chandler@friends.show"),
("Ross","ross@friends.show");

SELECT * FROM customers;
