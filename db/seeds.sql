INSERT INTO department (id, name)
VALUE
    ("Executive"),
    ("Security"),
    ("Logistics"),
    ("Construction"),
    ("Human Services"),
    ("Production");

INSERT INTO roles (id, role, role_id, role_department, salaray)
VALUE
    ("CEO", "10", "Executive", "90,000"),
    ("Guard", "20", "Security", "85,000"),
    ("Town Planner", "30", "Logistics", "80,000"),
    ("Builder", "40", "Construction", "70,000"),
    ("Counselor", "50", "Human Services", "65,000"),
    ("Buyer", "60", "Production", "65,000");

INSERT INTO employee (id, first_name, last_name, title, dep_name, emp_salary, manager)
VALUE
    ("Rick", "Grimes", "CEO", "Executive", "90,000", "Negan"),
    ("Daryl", "Dixon", "Guard", "Security", "85,000", "Rick Grimes"),
    ("Maggie", "Greene", "Town Planner", "Logistics", "80,000", "Michonne"),
    ("Glenn", "Rhea", "Builder", "Construction", "70,000", "Hershel Greene"),
    ("Gabriel", "Stokes", "Counselor", "Human Services", "65,000", "Rick Grimes"),
    ("Tara", "Chambler", "Buyer", "Production", "65,000", "Michonne");
    