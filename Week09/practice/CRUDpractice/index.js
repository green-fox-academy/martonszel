const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '$uruba03',
  database: 'employeedb'
});

conn.connect(err => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});

app.get('/employees', (request, response) => {
  conn.query(`SELECT * FROM employee`, (err, rows,fields) => {
    if (err) {
      response.status(500).json(err);
    };
    response.status(200).json(rows);
    
  });
});

app.get('/employees/:id', (request, response) => {
  conn.query(`SELECT * FROM employee WHERE EmpID = ?`,[request.params.id], (err, rows,fields) => {
    if (err) {
      response.status(500).json(err);
    };
    response.status(200).json(rows);
    
  });
});

app.delete('/employees/:id', (request, response) => {
  conn.query(`DELETE FROM employee WHERE EmpID = ?`,[request.params.id], (err, rows,fields) => {
    if (err) {
      response.status(500).json(err);
    };
    response.status(200).json('Delete successfully');
    
  });
});

app.post('/employees', (request, response) => {
  conn.query('INSERT INTO employee (EmpID, Name, EmpCode, Salary) VALUES (?, ?, ?,?);',
  [request.body.EmpID, request.body.Name, request.body.EmpCode,request.body.Salary],
  (err, data) => {
    if (err) {
      console.log(err.message);
      response.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    response.json({
      message: `Your URL is aliased to  and your secret code is .`
    });
  });
});




app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
