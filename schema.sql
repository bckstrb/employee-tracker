DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

USE company;

CREATE TABLE department  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role VARCHAR(30),
  role_id INT,
  role_department VARCHAR(30),
  salary INT,
  FOREIGN KEY (id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    title VARCHAR(30),
    dep_name VARCHAR(30),
    emp_salary INT,
    manager VARCHAR(30)
);