INSERT INTO department (id, name)
VALUE
    (1, "Executive"),
    (2, "Security"),
    (3, "Logistics"),
    (4, "Construction"),
    (5, "Human Services"),
    (6, "Production");

INSERT INTO roles (role_id, role, role_department, salary)
VALUE
    (1, "CEO", "Executive", 90,000),
    (2, "Guard", "Security", 85,000),
    (3, "Town Planner", "Logistics", 80,000),
    (4, "Builder", "Construction", 70,000),
    (5, "Counselor", "Human Services", 65,000),
    (6, "Buyer", "Production", 65,000);

INSERT INTO employee (id, first_name, last_name, title, dep_name, emp_salary, manager)
VALUE
    (1, "Rick", "Grimes", "CEO", "Executive", 90,000, "Negan"),
    (2, "Daryl", "Dixon", "Guard", "Security", 85,000, "Rick Grimes"),
    (3, "Maggie", "Greene", "Town Planner", "Logistics", 80,000, "Michonne"),
    (4, "Glenn", "Rhea", "Builder", "Construction", 70,000, "Hershel Greene"),
    (5, "Gabriel", "Stokes", "Counselor", "Human Services", 65,000, "Rick Grimes"),
    (6, "Tara", "Chambler", "Buyer", "Production", 65,000, "Michonne");
    