-- View all Departments
SELECT id, name
FROM department;
-- or
SELECT * FROM department;

-- View all Roles + Department
SELECT role.id, role.title, role.salary, department.name AS department
 FROM role
LEFT JOIN department ON department_id = department.id

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

SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary
FROM employee  
INNER JOIN role ON employee.role_id = role.id  
INNER JOIN department ON role.department_id = department.id;

-- Add department
INSERT INTO department SET ?

-- Add Role
INSERT INTO role SET?
VALUES ("WHATEVER YOU WANT", #####, #)

