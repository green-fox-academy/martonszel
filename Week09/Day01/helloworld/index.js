let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Hello World',
  });
});


app.listen( 3000, () => console.log('Listening on port 3000'));