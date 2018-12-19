const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');


app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

 app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (input) {
    res.json({
      received: input,
      result: 2 * input
    });
  } else {
    res.json({
      error: 'Please provide an input!',
    });
  }
})


app.listen(PORT, () => {
  console.log(`your server is running  on port: ${PORT}`)
})