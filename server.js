// const express = require('express');
//MySQL connection
const connection = require("./config/connection");
const inquirer = require('inquirer');
const mysql = require("mysql2");
const consoletable = require("console.table");

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
      choices: [
      "View All Departments", 
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
        console.log("Viewing all Departments:")
        allDepartments();
        break;
      case "View All Roles":
        console.log("Viewing all roles:")
        allRoles();
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
//This will be all departments so SELECT * FROM or SELECT id, name FROM department;
function allDepartments(){
  var query = `SELECT id, name FROM department;`
  connection.query(query, function(err, data){
    if (err) console.log(err);
    console.table(data)
    startprogram();
  })
};

function allRoles(){
  var query = `SELECT id, title, salary FROM role;`;
  connection.query(query,function(err,data){
    if (err) throw err;
    console.table(data)
    startprogram();
  })
};

function allEmployees(){
  var query = `SELECT id, first_name, last_name FROM employee`;
  connection.query(query, function(err, data){
    if (err) throw err;
    console.table(data)
    startprogram();
  })
  
};

function addDepartment(){
  startprogram();

};

function addRole() {
  startprogram();

};

function addEmployee(){
  startprogram();

};

function updateEmployee(){
  startprogram();

};

init();