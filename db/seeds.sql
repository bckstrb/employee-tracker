INSERT INTO department (name)
VALUE
    ("Executive"),
    ("Security"),
    ("Logistics"),
    ("Construction"),
    ("Human Services"),
    ("Production");

INSERT INTO roles (title, salary, department_id)
VALUE
    ("CEO", 90000, 1),
    ("Guard", 85000, 2),
    ("Town Planner", 100000, 3),
    ("Builder", 70000, 4),
    ("Counselor", 65000, 5),
    ("Buyer", 65000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE
    ("Rick", "Grimes", 1, NULL),
    ("Daryl", "Dixon", 2, 1),
    ("Maggie", "Greene", 3, 2),
    ("Glenn", "Rhea", 4, 3),
    ("Gabriel", "Stokes", 5, 1),
    ("Tara", "Chambler", 6, 2);
    