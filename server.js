//add dependancies
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const { json } = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

//adds middleware to make readable
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creating connection to sql
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Enaira22@",
    database: "company",
  },
  console.log(`Connected to the company database.`)
);

//create prompt to choose from view all depts, roles, employees or add these
const chooseOption = async () => {
  return inquirer
    .prompt({
      type: "list",
      name: "option",
      message: "What would you like to choose?",
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee",
      ],
    })
    .then((choice) => {
      // console.log(choice);
      if (choice.option === "View all Departments") {
        viewDepartments();
      } else if (choice.option === "View all Roles") {
        viewRoles();
      } else if (choice.option === "View all Employees") {
        viewEmployees();
      } else if (choice.option === "Add a Department") {
        addDepartment();
      } else if (choice.option === "Add a Role") {
        addRole();
      } else if (choice.option === "Add an Employee") {
        addEmployee();
      } else {
        updateEmployee();
      }
      // console.log(choice.option)
    });
};

chooseOption();

//functions to view departments, roles, and employees
const viewDepartments = () => {
  db.query("SELECT * from department", (err, res) => {
    console.table(res);
    chooseOption();
  });
};

const viewRoles = () => {
  const sql = `SELECT roles.id AS 'ID',
    roles.title AS 'Title',
    roles.salary AS 'Salary',
    department.name AS 'Department'
    FROM roles
    LEFT JOIN department
    ON (department.id = roles.department_id)`;

  db.query(sql, (err, res) => {
    if (err) console.log(err);
    console.table(res);
    chooseOption();
  });
};

const viewEmployees = () => {
  const sql = `SELECT e.id AS 'ID',
    e.first_name AS 'First Name',
    e.last_name AS 'Last Name',
    roles.title AS 'Title',
    manager.first_name AS 'Manager First Name',
    manager.last_name AS 'Manager Last Name'
    FROM employee e
    LEFT JOIN roles
    ON (roles.id = e.role_id)
    LEFT JOIN employee manager
    ON (manager.id = e.manager_id)`;

  db.query(sql, (err, res) => {
    console.log(err);
    console.table(res);
    chooseOption();
  });
};

// functions to add departments, roles, and employees
const addDepartment = async () => {
  return inquirer
    .prompt({
      type: "input",
      name: "department",
      message: "What department would you like to add?",
    })
    .then((answer) => {
      db.query(
        "INSERT INTO department SET name = ?",
        answer.department,
        (err, res) => {
          answer.department;
          console.log(answer.department + " has been updated!");
          chooseOption();
        }
      );
    });
};

const addRole = () => {
  const sql = `SELECT id, name FROM department`;

  db.query(sql, (err, res) => {
    // console.log(res);
    // console.log(err);
    res = res.map(function (department) {
      return {
        value: department.id,
        name: department.name,
      };
    });
    return inquirer
      .prompt([
        {
          type: "input",
          name: "roleTitle",
          message: "What is the title of the you would like to add?",
        },
        {
          type: "input",
          name: "roleSalary",
          message: "What is the salary for this role?",
        },
        {
          type: "list",
          name: "roleDepartment",
          message: "What department is the role apart of?",
          choices: res,
        },
      ])
      .then((answer) => {
        db.query(
          "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);",
          [answer.roleTitle, answer.roleSalary, answer.roleDepartment],
          (err, res) => {
            console.log(answer.roleTitle + " has been updated!");
            chooseOption();
          }
        );
      });
  });
};

const addEmployee = () => {
  const roleSql = `SELECT id, title FROM roles`;
  const managerSql = `SELECT id, first_name, last_name FROM employee`;
  let roles = [];

  db.query(roleSql, (err, role) => {
    for (var i = 0; i < role.length; i++) {
      roles.push(role[i].title);
    }

    db.query(managerSql, (err, manager) => {
      let managerArr = [];
      for (var i = 0; i < manager.length; i++) {
        let managerName = "";
        managerName = manager[i].last_name;
        managerArr.push(managerName);
      }
      // console.log(managerArr)
      return inquirer
        .prompt([
          {
            type: "input",
            name: "firstName",
            message:
              "What is the first name of the employee you would like to add?",
          },
          {
            type: "input",
            name: "lastName",
            message:
              "What is the last name of the employee you would like to add?",
          },
          {
            type: "list",
            name: "employeeTitle",
            message: "What is the title of the employee you would like to add?",
            choices: roles,
          },
          {
            type: "list",
            name: "managerName",
            message: "What is the last name of their manager?",
            choices: managerArr,
          },
        ])
        .then((answer) => {
          // console.log(answer.employeeTitle)
          const rId = roles.indexOf(answer.employeeTitle);
          // console.log("rId", rId);
          const mId = managerArr.indexOf(answer.managerName);
          console.log(mId);
          db.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            [answer.firstName, answer.lastName, rId + 1, mId + 1],
            (err, role) => {
              console.log(answer.employeeTitle + " has been updated!");
              // console.log(role)
              chooseOption();
            }
          );
        });
    });
  });
};

// function to update employee
const updateEmployee = () => {
  const eSql = `SELECT id, first_name, last_name FROM employee`;
  const rSql = `SELECT id, title FROM roles`;
  let employees = [];

  db.query(eSql, (err, employee) => {
    for (var i = 0; i < employee.length; i++) {
      employees.push(employee[i].last_name);
    }

    db.query(rSql, (err, role) => {
      let roles = [];
      for (var i = 0; i < role.length; i++) {
        let roleTitle = "";
        roleTitle = role[i].title;
        roles.push(roleTitle);
      }

      return inquirer
        .prompt([
          {
            type: "list",
            name: "employeeName",
            message: "Which employee would you like to update?",
            choices: employees,
          },
          {
            type: "list",
            name: "roleTitle",
            message: "What is the employee's new role?",
            choices: roles,
          },
        ])
        .then((answer) => {
          const eId = employees.indexOf(answer.employeeName);
          const rId = roles.indexOf(answer.roleTitle);

          db.query(
            "UPDATE employee SET last_name = ? WHERE role_id = ?",
            [answer.eId + 1, answer.rId + 1],
            (err, employee) => {
              console.log(answer.employeeName + " has been updated!");
              chooseOption();
            }
          );
        });
    });
  });
};
//get all employees from db
//push employee first name to a new arr called employees
//let the user select an employee from arr
//get all roles from db
//push roles title to a new arr called roles
//let the user select a new role from arr
//update db using sql
