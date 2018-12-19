const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/assets', express.static('assets'));
app.use(express.json());

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

app.get('/appenda/:appendable', (req, res) => {
  const { appendable } = req.params;
  if (appendable) {
    res.json({
      appended: `${appendable}a`
    });
  } else {
    res.json({
      error: 'Please provide an input!',
    });
  }
})

function sumUntil(inputNumber) {
  if (inputNumber > 0) {
    return inputNumber + sumUntil(inputNumber - 1);
  } else {
    return 0;
  }
}

function multiplyUntil(inputNumber) {
  if (inputNumber > 1) {
    return inputNumber * multiplyUntil(inputNumber - 1);
  } else {
    return 1;
  }
}
app.post('/dountil/:action', (req, res) => {
  let sumResult = sumUntil(req.body.until);
  let multipResult = multiplyUntil(req.body.until)
  if (req.params.action === 'sum') {
    res.json({
      "result": sumResult
    })
  } else if (req.params.action === 'factor') {
    res.json({
      "result": multipResult
    })
  } else {
    res.json({
      error: "Please provide a valid action"
    })
  }
})

app.listen(PORT, () => {
  console.log(`your server is running  on port: ${PORT}`)
})