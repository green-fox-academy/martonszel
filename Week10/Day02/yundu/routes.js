const express = require('express');
const app = express();

app.use(express.json());

app.get('/yundu', (req, res) => {
  const { distance,time  } = req.query; 
  let speed = distance / time;
  if (distance,time) {
    if(time>0){
    res.status(200).json({
      "distance": distance,
      "time": time,
      "speed": speed
    });
  
  } else {
    res.status(210).json({
      error: "Dájé"
    });
  }
  }
});

module.exports = app;