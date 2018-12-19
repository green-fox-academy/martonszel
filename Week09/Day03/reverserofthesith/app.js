const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

app.post('/sith', (req, res) => {
  let text = req.body.text;
  if (!text || text.length === 0) {
    res.json({
      error: `Feed me some text you have to, padawan young you are. Hmmm.`
    })
  } else {
    res.json({
      "sith_text": (req.body.text)
    })
  }
})

app.listen(PORT, () => {
  console.log(`your server is running  on port: ${PORT}`)
})