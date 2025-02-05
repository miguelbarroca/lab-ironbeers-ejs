// NOMIN, TOKS, MIGUEL

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { get } = require('http');

const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')));

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', async (req, res) => {
  try {
  let allBeers = await punkAPI.getBeers();
  console.log('Heres the beers', allBeers)
  res.render('beers', {allBeers})
  }
  catch(error) {
    console.log('Error getting the bears', error)
  }
});


app.get('/random-beer', async (req, res) => {
  try {
  let allBeers = await punkAPI.getRandom();
  console.log('Heres the beers', allBeers)
  res.render('random-beer', {allBeers})
  }
  catch(error) {
    console.log('Error getting the bears', error)
  }
});


app.listen(3000, () => console.log('🏃‍ on port 3000'));
