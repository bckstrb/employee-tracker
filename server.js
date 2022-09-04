//add dependancies 
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');


const PORT = process.env.PORT || 3001;
const app = express();

//adds middleware to make readable 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creating connection to sql
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Enaira22@',
    database: 'company'
  },
  console.log(`Connected to the company database.`)
);

//create prompt to choose from view all depts, roles, employees or add these
const chooseOption = async () => {
    return inquirer.prompt(
        {
            type: "list",
            name: "option",
            message: "What would you like to choose?",
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee"]
        }
    )
    .then (choice => {
        console.log(choice);
    if (choice.option === "View all Departments") {
        viewDepartments()
    }else if (choice.option === "View all Roles") {
        viewRoles()
    }  
    // console.log(choice.option)
    })
};

chooseOption();

const viewDepartments = () => {
    db.query("SELECT * from department", (err, res) => {
        console.table(res)
        chooseOption()
    })
};

const viewRoles = () => {
    const sql = `SELECT roles.id AS 'ID'
    roles.title AS 'Title'
    roles.salary AS 'Salary'
    department.name AS 'Department'
    FROM roles
    LEFT JOIN department
    ON (department.id = roles.department_id)`

    db.query(sql, (err, res) => {
        if (err) console.log(err)
        console.table(res)
    })
}