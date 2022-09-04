const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const path = require("path");
const sort = require("./generateHTML.js");



//create an empty array for employee data
const employeeData = [];

//create an array of initial questions for the manager 
const questionData = async () => {
    const data = await inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your employee email address",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your office number"
        },
    ])
    .then(manager => {
        // console.log(manager)
        const newManager = new Manager (
            manager.name,
            manager.id,
            manager.email,
            manager.officeNumber,
        )
        employeeData.push(newManager);
        anyOption();
    })
}

//function to prompt the next option
const anyOption = async () => {
    return inquirer.prompt(
        {
                type: "list",
                name: "role",
                message: "What do you want to do next",
                choices: ["Add Engineer", "Add Intern", "Build Team"]
            }
    )
    .then(option => {
        // console.log(option);
        if (option.role === "Add Engineer") {
            // console.log("Engineer");
            engineerQuestions()
        }else if(option.role === "Add Intern") {
            // console.log("Intern")
            internQuestions()
        }else {
            // console.log("Build Team")
            sort (employeeData)
        }
    })

} 

questionData ();

//create an array of questions for the engineer
const engineerQuestions = async () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the engineer's name"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the engineer's id number"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's email address"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's Github URL"
        }
    ])
    .then(engineer => {
        const newEngineer = new Engineer (
            engineer.name,
            engineer.id,
            engineer.email,
            engineer.github
        )
        employeeData.push(newEngineer)
        anyOption()
    }) 
};

//create an array with questions for the intern
const internQuestions = async () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the intern's name"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the intern's id number"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's email address"
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school"
        }
    ])
    .then(intern => {
        const newIntern = new Intern (
            intern.name,
            intern.id,
            intern.email,
            intern.school
        )
        employeeData.push(newIntern)
        anyOption()
    })
}



