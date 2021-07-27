-- View all Departments
SELECT id, name
FROM department;

-- View all Roles
SELECT id, title, salary
FROM role;

-- View all Employees 
SELECT id, first_name, last_name,role_id, manager_id
FROM employee;

-- Add department
INSERT INTO department (name)
VALUES ("WHATEVER YOU WANT");

-- Add Role
INSERT INTO role (title, salary, department_id)
VALUES ("WHATEVER YOU WANT", #####, #)

--  Update Employee Role
UPDATE employee (role_id)