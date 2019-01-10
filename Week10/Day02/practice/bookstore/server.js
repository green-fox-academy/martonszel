const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use('/assets', express.static('assets'));

const conn = mysql.createConnection({
  user: 'root',
  password: '$uruba03',
  database: 'bookinfo',
  port: 3306,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/author', (req, res) => {
  conn.query('SELECT * FROM author', (err, data) => {
    if (err) {
      res.status(500).json({
        messege: "server error"
      });
      return;
    } res.status(200).json(data);
  })
});

app.delete('/author', (req, res) => {
  const { aut_id } = req.body;
  const sql = 'SELECT * FROM author';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    if (rows.find(data => data.aut_id === aut_id)) {
      conn.query(`DELETE FROM author WHERE aut_id = '${aut_id}';`, (err, data) => {
        if (err) {
          console.log(err.message);
          res.status(500).json({
            error: 'Internal server error'
          });
          return;
        }
        res.json({
          message: 'Succesfully deleted'
        });
      });
    } else {
      res.json({
        message: 'Wrong ID'
      });
    }
  });

});

app.post('/author', (req, res) => {
  const { aut_id, aut_name, country, home_city } = req.body;
  if (aut_id === undefined || aut_id === '' || aut_name === undefined || aut_name === ''
    || country === undefined || country === '' || home_city === undefined || home_city === '') {
    res.json({
      messeage: " töltsd ki te buzi "
    })
  } else {

  conn.query('INSERT INTO author (aut_id,aut_name,country,home_city) VALUES (?,?,?,?)', [aut_id,aut_name,country,home_city],
   (err, data) => {
      if (err) {
        res.status(500).json({
          messege: "server error"
        });
        return;
      } res.status(200).json({
        message: 'successfully added'
      });
    })
  }
});
  




app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});