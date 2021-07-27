const mysql = require("mysql2");
require('dotenv').config();

var connection = mysql.createConnection(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql2',
    port: 3306
  }
);

//creates connection to the msql database
connection.connect(function (err) {
  if (err)
  // throw err;
  console.log ("error connecting: " + connection.threadId);
});

module.exports = connection;
