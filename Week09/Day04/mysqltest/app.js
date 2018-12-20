const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '$uruba03',
  database: 'todo'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});