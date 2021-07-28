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
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What department would you like to add?"
    },
  ]).then(input => {
    var query = `INSERT INTO department SET ?`
      connection.query(query, {
        name: input.name,
        id: input.id
      },
      function (err, res) {
        if (err) console.log(err);

        console.table(res);
        console.log("New Department Created!");
        startprogram();     
        });
  })
}

function addRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "rolename",
      message: "What role would you like to add?"
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for this role?"
    },
    {
      type: "list",
      name: "department",
      message: "What department will this role be in?",
      choices: ["1","2","3",], //!Research how to do this! pull the departments from the existing list
    },
  ]).then(input => {
    var query = `INSERT INTO role SET ?`
      connection.query(query, {
        title: input.rolename,
        salary: input.salary,
        department_id:input.department
      },
      function (err, res) {
        if (err) console.log(err);

        console.table(res);
        console.log("New Role Inserted!");
        startprogram();     
        });
  })
}

function addEmployee(){
  inquirer.prompt([
    {
      type: "input",
      name: "employeeFname",
      message: "What is the employee's first name?"
    },
    {
      type: "input",
      name: "employeeLname",
      message: "What is the employee's last name?"
    },
    {
      type: "list",
      name: "department",
      message: "What is this employee's role?",
      choices: ["1","2","3",], //!Research how to do this! pull the role title from the existing list on role table
    },
    {
      type: "list",
      name: "department",
      message: "Who is this employee's manager?",
      choices: ["1","2","3",], //!Research how to do this! pull the name from role id, from the manager id.. from the existing list on employee table?
    },
  ]).then(input => {
    var query = `INSERT INTO employee SET ?`
      connection.query(query, {
        first_name: input.employeeFname,
        last_name: input.employeeLname,
        role_id:input.//!
        manager_id: input.//!
      },
      function (err, res) {
        if (err) console.log(err);

        console.table(res);
        console.log("New Employee Created!");
        startprogram();     
        });
  })
}

function updateEmployee(){
  startprogram();

};

init();