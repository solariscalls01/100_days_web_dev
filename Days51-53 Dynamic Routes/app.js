const fs = require('fs');
const path = require('path');

const PORT = 3000

const express = require('express');

const app = express();

// including the UUID package to create id values
const UID = require ('uuid')

// IMPORTING our own function 
const resData = require ('./util/restaurant-data.js')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/restaurants', function (req, res) {
  const storedRestaurants = resData.getStoredRestaurants();

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
  
  const storedRestaurants = resData.getStoredRestaurants()
  
  // Conditional segment to only show the restaurantID if it matches. The "return" in the conditional basically stops the program from continuing/ rendering further if it already 
  // matches the restaurantID
  for (const index of storedRestaurants) {
    console.log(index)
    console.log(index.id)
    console.log(restaurantID)
    if (index.id == restaurantID) {
      return res.render('restaurants-detail', {restaurant: index, rid: restaurantID}) //key:value pair. Get's passed in the restaurant-detail.ejs section. REMEMBER the value is from the for loop and the key is whatever name we want to use 
      // that gets passed in the ejs. 
    }
  }
  res.status(404)
  res.render("404")
})

app.get('/recommend', function (req, res) {
  res.render('recommend');
});

app.post('/recommend', function (req, res) {
  const restaurant = req.body;

  // USING FUNCTIONS IN ORDER TO reduce duplicate codes in all areas. 
  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.push(restaurant);

  resData.storeRestaurants(storedRestaurants)
  // The .id technically does not exist, but JS automatically creates these values if they do not exist. But this section allows us to generate numerical id's for our list items
  // everytime a new form is posted. Requires the 3rd party app "uuid"

  restaurant.id = UID.v4();
  console.dir(req)
  

  res.redirect('/confirm');
});

app.get('/confirm', function (req, res) {
  res.render('confirm');
});

app.get('/about', function (req, res) {
  res.render('about');
});

// IN DEALING WITH ROUTING ERRORS, we want to use "middleware", in this case app.use that reroutes users to our custom 404 page in the event the path is incorrect
// This needs to be placed at the bottom. Because the route starts from top to bottom and if the specific get wasn't found, it will reach this section and return the 404.
// THE res.status is TECHNICALLY not required, however what this does is sends the error code to the browser in order to actually show case what specific error was targeted.
// ANOTHER way to write this is what is called CHAINING. 
// can also be written as res.status(400).render('404')
app.use((req,res) => {
  res.status(404)
  res.render('404')
})

// When using error codes, the formatting needs to have 4 parameters in the function in this order. 
app.use((err,req,res,next) => {
  res.status(500)
  res.render('500')
})

app.listen(PORT);
console.log("listening on " + PORT)