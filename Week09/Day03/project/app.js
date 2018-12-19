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

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
     welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  } else if (!req.query.name) {
    res.json({
      error: 'Please provide a name!',
    });
  } else if (!req.query.title) {
    res.json({
      error: 'Please provide a title!',
    });
  } else {
    res.json({
      error: `Please provide a name and a title!`,
    });
  }
})



app.listen(PORT, () => {
  console.log(`your server is running  on port: ${PORT}`)
})