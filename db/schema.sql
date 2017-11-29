CREATE DATABASE bergers_db;

USE bergers_db;

CREATE TABLE bergers(
	id INT AUTO_INCREMENT NOT NULL,
	berger_nom VARCHAR(45) NOT NULL,
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY(id)
);
