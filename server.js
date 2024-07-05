const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',  // Your MySQL server host
  user: 'root',       // Your MySQL username
  password: 'root',       // Your MySQL password
  database: 'mydatabase' // The name of the database you created
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});