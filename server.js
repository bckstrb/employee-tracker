//add dependancies 
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');


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
    password: '',
    database: 'company'
  },
  console.log(`Connected to the company database.`)
);

//create prompt to choose from view all depts, roles, employees or add these
const anyOption = async () => {
    return inquirer.prompt(
        {
            type: "list",
            name: "option",
            message: "What would you like to choose?",
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee"]
        }
    )
    .then ()
}