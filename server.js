//add dependancies
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

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
  const sql = `SELECT employee.id AS 'ID',
    employee.first_name AS 'First Name',
    employee.last_name AS 'Last Name',
    role.id AS 'Role ID'
    FROM employee
    LEFT JOIN roles
    ON (roles.id = employee.role_id)`;

  db.query(sql, (err, res) => {
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
      db.query("INSERT INTO department SET name = ?", answer.department, (err, res) => {
        answer.department;
        console.log(answer.department + " has been updated!");
        chooseOption();
      });      
    });
    
};

// const addRole = async () => {
//   return inquirer
//     .prompt([
//       {
//       type: "input",
//       name: "roleTitle",
//       message: "What is the title of the you would like to add?",
//     },
//     {
//       type: "input",
//       name: "roleSalaray",
//       message: "What is the salary for this role?",
//     },
//     {
//       type: "input",
//       name: "roleDepartment",
//       message: "What department is the role apart of?"
//     },
//   ])
//     .then((answer) => {
//       db.query("INSERT INTO roles SET name = ?", 
//       {
//         roleTitle: answer.role, 
//         roleSalary: answer.salary, 
//         roleDepartment: answer.department
//       }, 
//       (err, res) => {       
//         console.log(answer.title + " has been updated!");
//         chooseOption();
//       });      
//     });
// };




