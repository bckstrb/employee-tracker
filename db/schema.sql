DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

USE company;

CREATE TABLE department  (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_id INT,
  role VARCHAR(30),
  role_department VARCHAR(30),
  salary INT,
  FOREIGN KEY (id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  title VARCHAR(30),
  emp_id INT,
  dep_name VARCHAR(30),
  emp_salary INT,
  manager VARCHAR(30),
  FOREIGN KEY (id)
  REFERENCES roles(id)
);

INSERT INTO department (name)
VALUE
    ("Executive"),
    ("Security"),
    ("Logistics"),
    ("Construction"),
    ("Human Services"),
    ("Production");

INSERT INTO roles (role_id, role, role_department, salary)
VALUE
    (125, "CEO", "Executive", 90000),
    (135, "Guard", "Security", 85000),
    (145, "Town Planner", "Logistics", 80000),
    (155, "Builder", "Construction", 70000),
    (165, "Counselor", "Human Services", 65000),
    (175, "Buyer", "Production", 65000);  

INSERT INTO employee (first_name, last_name, title, emp_id, dep_name, emp_salary, manager)
VALUE
    ("Rick", "Grimes", "CEO", 125, "Executive", 90000, "None"),
    ("Daryl", "Dixon", "Guard", 135, "Security", 85000, "Rick Grimes"),
    ("Maggie", "Greene", "Town Planner", 145,  "Logistics", 80000, "Michonne"),
    ("Glenn", "Rhea", "Builder", 155, "Construction", 70000, "Hershel Greene"),
    ("Gabriel", "Stokes", "Counselor", 165, "Human Services", 65000, "Rick Grimes"),
    ("Tara", "Chambler", "Buyer", 175, "Production", 65000, "Michonne");