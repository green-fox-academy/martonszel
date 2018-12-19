const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('blabla')
})

app.post('/arrays', (req, res) => {
  if (!req.body.what || !req.body.numbers) {
    res.json({
      error: 'Please provide what to do with the numbers!'
    })
  } else {
    let sum = 0;
    req.body.numbers.forEach(e => {
      sum += e;
    });
    let multiply = 1;
    req.body.numbers.forEach(e => {
      multiply *= e;
    });
    let double = req.body.numbers.map(e => {
      return e * 2;
    });
    if (req.body.what === 'sum') {
      res.json({
        "result": sum,
      })
    } else if (req.body.what === 'multiply') {
      res.json({
        "result": multiply,
      })
    } else if (req.body.what === 'double') {
      res.json({
        "result": double,
      })
    }
  }
})

app.listen(PORT, () => {
  console.log(`your server is running  on port: ${PORT}`)
})