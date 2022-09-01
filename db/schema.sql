DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  role VARCHAR(30),
  role_id INT,
  role_department VARCHAR(30),
  salary INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  title VARCHAR(30),
  dep_name VARCHAR(30),
  emp_salary INT,
  manager VARCHAR(30),
  PRIMARY KEY (id)
);