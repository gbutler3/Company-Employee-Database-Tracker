 -- Use the company_db -- 
USE company_db;

-- inserting department, role, and employee tables into the database company_db -- 
INSERT INTO department (name)
VALUES  ("Management"),
        ("Reception"),
        ("Sales"),
        ("Accounting"),
        ("Human Resources"),
        ("Customer Service"),
        ("Warehouse");

INSERT INTO role (title, salary, department_id)
VALUES  ("Regional Manager", 150000, 1),
        ("Receptionist", 85000, 2),
        ("Sales Lead",130000, 3),
        ("Sales Representative",110000, 3),
        ("Accountant", 85000, 4),
        ("HR Specialist", 60000, 5),
        ("CX Representative", 65000, 6),
        ("Warehouse Lead ", 90000, 7),
        ("Warehouse Associate", 80000, 7);

Insert INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Michael", "Scott", 1, null), -- management --
        ("Pam", "Beesly", 2 , 1), -- reception --
        ("Dwight", "Schrute", 3 , 1), -- sales --
        ("Jim", "Halpert", 4, 3), -- sales --
        ("Phyllis", "Vance", 4, 3), -- sales --
        ("Stanley", "Hudson", 4, 3), -- sales -- 
        ("Angela", "Martin", 5, 1), -- accounting --   
        ("Kevin", "Malone", 5, 1), -- Accounting --
        ("Oscar", "Martinez", 5, 1), -- Accounting --
        ("Toby", "Flenderson", 6, 1), -- HR --
        ("Creed", "Bratton", 7, 1), -- customer service --
        ("Meredith", "Palmer", 7, 1), -- Customer Service --
        ("Kelly", "Kapoor", 7,1), -- customer service --
        ("Darryl", "Philbin", 8, null), -- Warehouse --
        ("Roy", "Anderson", 9, 14), -- warehouse --
        ("Val", "Johnson", 9, 14); -- warehouse --

