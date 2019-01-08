const express = require('express');
const app = express();

app.use(express.json());

app.get('/groot', (req, res) => {
  let { somemessage  } = req.query; 
  
  if (somemessage) {
    res.status(200).json({
      "received": `${somemessage}`,
      "translated": "I am Groot!"
    });
  } else {
    res.status(210).json({
      error: "I am Groot!"
    });
  }
});

module.exports = app;