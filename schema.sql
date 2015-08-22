DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS carts CASCADE;
DROP TABLE IF EXISTS carts_products CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS orders_products CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS ratings CASCADE;


CREATE TABLE customers (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255),
	admin BOOLEAN NOT NULL default FALSE,
	date DATE NOT NULL default CURRENT_DATE
);

CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	category VARCHAR(255)
);

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255),
	price INTEGER,
	image VARCHAR(255),
	quantity INTEGER,
	description TEXT,
	skin_type VARCHAR(255),
	skin_condition VARCHAR(255),
	rating INTEGER NOT NULL default 0,
	customer_id INTEGER references customers,
	category_id INTEGER references categories,
	date DATE NOT NULL default CURRENT_DATE
);

CREATE TABLE carts (
	id SERIAL PRIMARY KEY,
	customer_id INTEGER references customers,
	date DATE NOT NULL default CURRENT_DATE
);

CREATE TABLE carts_products (
	id SERIAL PRIMARY KEY,
	product_id INTEGER references products,
	date DATE NOT NULL default CURRENT_DATE
);

CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	customer_id INTEGER references customers,
	shipping_address VARCHAR(255),
	billing_address VARCHAR(255),
	date DATE NOT NULL default CURRENT_DATE
);

CREATE TABLE orders_products (
	id SERIAL PRIMARY KEY,
	product_id INTEGER references products,
	date DATE NOT NULL default CURRENT_DATE
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	customer_id INTEGER references customers,
	product_id INTEGER references products,
	description TEXT
);

CREATE TABLE ratings (
	id SERIAL PRIMARY KEY,
	customer_id INTEGER references customers,
	product_id INTEGER references products,
	rating INTEGER
);