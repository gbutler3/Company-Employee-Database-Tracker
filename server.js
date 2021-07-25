const express = require('express');
const mysql = require('mysql2');
//MySQL connection
const connection = require("./config/connection");
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const init = () => {
  startprogram()
};

//on npm start it shows this message and then prompts the questions.
function startprogram(){
  console.log ("Welcome to the Company Employee Tracker!")
  inquirer.prompt([
    {
      type: "list",
      name: "ViewChoice",
      message: "What would you like to do?",
      choices: ["View All Departments", 
      "View All Roles", 
      "View all Employees", 
      "Add Department", 
      "Add Role", 
      "Add an Employee", 
      "Update Employee Role"
      //BONUS "Update employee managers", "View employees by manager", "View employees by department", "Delete departments, roles, and employees" 
    ]
  },
  ]).then(choices => {
    switch (choices.ViewChoice){
      case "View All Departments":
        allDepartments();
        break;
      case "View all Employees":
        allEmployees();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add an Employee":
        addEmployee();
        break;
      case "Update Employee Role":
        updateEmployee();
        break;
    }
  })
};
//This will be all departments so SELECT * FROM
function allDepartments(){

};

function allEmployees(){

};

function addDepartment(){

};

function addRole() {

};

function addEmployee(){

};

function updateEmployee(){

};

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

init();