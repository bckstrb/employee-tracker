DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

USE company;

CREATE TABLE department  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  FOREIGN KEY (role_id)
  REFERENCES roles(id),
  manager_id INT,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
);

-- INSERT INTO department (name)
-- VALUE
--     ("Executive"),
--     ("Security"),
--     ("Logistics"),
--     ("Construction"),
--     ("Human Services"),
--     ("Production");

-- INSERT INTO roles (role_id, role, role_department, salary)
-- VALUE
--     (125, "CEO", "Executive", 90000),
--     (135, "Guard", "Security", 85000),
--     (145, "Town Planner", "Logistics", 80000),
--     (155, "Builder", "Construction", 70000),
--     (165, "Counselor", "Human Services", 65000),
--     (175, "Buyer", "Production", 65000);  

-- INSERT INTO employee (first_name, last_name, title, emp_id, dep_name, emp_salary, manager)
-- VALUE
--     ("Rick", "Grimes", "CEO", 125, "Executive", 90000, "None"),
--     ("Daryl", "Dixon", "Guard", 135, "Security", 85000, "Rick Grimes"),
--     ("Maggie", "Greene", "Town Planner", 145,  "Logistics", 80000, "Michonne"),
--     ("Glenn", "Rhea", "Builder", 155, "Construction", 70000, "Hershel Greene"),
--     ("Gabriel", "Stokes", "Counselor", 165, "Human Services", 65000, "Rick Grimes"),
--     ("Tara", "Chambler", "Buyer", 175, "Production", 65000, "Michonne");