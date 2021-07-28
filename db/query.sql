-- View all Departments
SELECT id, name
FROM department;
-- or
SELECT * FROM department;

-- View all Roles
SELECT id, title, salary
FROM role;
-- or
SELECT * FROM role;

-- View all Employees 
SELECT id, first_name,last_name, role_id, manager_id
FROM employee;
-- or 
SELECT * FROM employee;

-- Add department
INSERT INTO department SET ?

-- Add Role
INSERT INTO role SET?
VALUES ("WHATEVER YOU WANT", #####, #)

--  Update Employee Role
UPDATE employee (role_id)