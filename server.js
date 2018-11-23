'use strict'

const express = require('express');
const ejs = require('ejs')
const bodyParser = require('body-parser');

const PORT = 4000;
const app = express();


app.listen(PORT, () => console.log(`App is up on port ${PORT}`));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.render('index.ejs');
})
