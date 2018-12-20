'use strict'
const express = require('express');
const PORT = 3000;
const app = express();

const todos = [
  'get up',
  'shower',
  'breakfest',
  'survive',
  'dinner',
  'exercise',
  'go to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    todos
  })
})

app.listen(PORT, () => {
  console.log(`the server is running on port: ${PORT}`)
})