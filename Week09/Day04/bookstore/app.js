
require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

conn.connect(err => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});
/*
conn.query('SELECT * FROM author;', function(err, rows) {
  if (err) {
    console.log(err.message);
  }
  console.log('Data received from Db:\n');
  console.log(rows);
});

app.get('/', function(req, res) {
  conn.query('SELECT book_name FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.message);
      res.status(500).json !!!!!!!!!! ('Database error');
      return;
    }
    res.json(rows);
  });
});
*/
app.get('/books', (req, res) => {
  conn.query(basicquery, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send('Database error');
      return;
    }
    res.status(200).send(data);
  });
});

let basicquery = 
`select book_name, aut_name, pub_name, cate_descrip, book_price 
FROM book_mast, author,publisher,category  
WHERE book_mast.aut_id = author.aut_id AND book_mast.pub_id = publisher.pub_id AND book_mast.cate_id = category.cate_id`


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));