let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render('home', {
    name: `Welcome ${req.query.name||'Guest'}! `,
  });
});


app.listen( 3000, () => console.log('Listening on port 3000'));