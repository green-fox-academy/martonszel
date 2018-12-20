const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

app.post('/translate', (req, res) => {
  if (req.body.lang === 'hu') {
    res.json({
      translated: cammelizer(req.body.text, 'hu'),
      lang: "teve"
    })
  } else if (req.body.lang === 'eng') {
    res.json({
      "translated": cammelizer(req.body.text, 'eng'),
      "lang": "teve"
    })
  } else {
    req.json({
      "error": "I can't translate that!"
    })
  }
})

app.listen(PORT, () => {
  console.log(`your server is running  on port: ${PORT}`)
})