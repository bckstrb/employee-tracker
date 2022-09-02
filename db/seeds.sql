INSERT INTO department (id, name)
VALUE
    (1, "Executive"),
    (2, "Security"),
    (3, "Logistics"),
    (4, "Construction"),
    (5, "Human Services"),
    (6, "Production");

INSERT INTO roles (id, role_id, role, role_department, salary)
VALUE
    (1, 125, "CEO", "Executive", 90,000),
    (2, 135, "Guard", "Security", 85,000),
    (3, 145, "Town Planner", "Logistics", 80,000),
    (4, 155, "Builder", "Construction", 70,000),
    (5, 165, "Counselor", "Human Services", 65,000),
    (6, 175, "Buyer", "Production", 65,000);

INSERT INTO employee (id, first_name, last_name, title, emp_id, dep_name, emp_salary, manager)
VALUE
    (1, "Rick", "Grimes", "CEO", 125, "Executive", 90,000, "Negan"),
    (2, "Daryl", "Dixon", "Guard", 135, "Security", 85,000, "Rick Grimes"),
    (3, "Maggie", "Greene", "Town Planner", 145,  "Logistics", 80,000, "Michonne"),
    (4, "Glenn", "Rhea", "Builder", 155, "Construction", 70,000, "Hershel Greene"),
    (5, "Gabriel", "Stokes", "Counselor", 165, "Human Services", 65,000, "Rick Grimes"),
    (6, "Tara", "Chambler", "Buyer", 175, "Production", 65,000, "Michonne");
    