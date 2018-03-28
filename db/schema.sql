DROP DATABASE IF EXISTS burgers_db;
-- Creates the "todolist" database --
CREATE DATABASE burgers_db;

USE burgers_db;
 

CREATE TABLE burgers 
(
	id INT NOT NULL auto_increment,
	burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)

);