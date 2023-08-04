-- Your code here
.mode column
DROP TABLE IF EXISTS customers;
CREATE TABLE customers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(40) NOT NULL ,
    phone NUMERIC(10),
    email VARCHAR(255),
    points INTEGER NOT NULL DEFAULT 5,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(phone, email)

);
DROP TABLE IF EXISTS coffee;

CREATE TABLE coffee(
    id INT PRIMARY KEY,
    is_redeemed BOOLEAN,
    ordered_at TIMESTAMP

);
