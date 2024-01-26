const fs = require('fs');
const path = require('path');

const PORT = 3000

const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/restaurants', function (req, res) {
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render('restaurants', {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

// ADDING AND USING DYNAMIC ROUTES
// Dynamic routing allows developers to define routes that can match a variety of patterns rather than just fixed URLs
// Need to add the : followed by any type of identifier you want to name it. Can be anything. 

app.get('/restaurants/:id', (req,res) => {
  const restaurantID = req.params.id  // the .id comes from the :id above. if we were to have a different name say, :number, it would be req.params.number
  res.render('restaurants-detail', {rid: restaurantID}) //key:value pair. Get's passed in the restaurant-detail.ejs section
})

app.get('/recommend', function (req, res) {
  res.render('recommend');
});

app.post('/recommend', function (req, res) {
  const restaurant = req.body;
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect('/confirm');
});

app.get('/confirm', function (req, res) {
  res.render('confirm');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.listen(PORT);
console.log("listening on " + PORT)