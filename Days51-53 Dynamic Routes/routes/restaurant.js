const express = require("express");
const router = express.Router();

// IMPORTING our function
const resData = require("../util/restaurant-data.js");

// including the UUID package to create id values
const UID = require("uuid");

// ADDING AND USING DYNAMIC ROUTES
// Dynamic routing allows developers to define routes that can match a variety of patterns rather than just fixed URLs
// Need to add the : followed by any type of identifier you want to name it. Can be anything.

router.get("/restaurants", function (req, res) {
  let order = req.query.order // the .query request gets any query parameter that is passing through this get request. The .order comes from the name from the input form in the restaurant.ejs
  const storedRestaurants = resData.getStoredRestaurants();

  console.log(order)    // since we have a query when clicking the button "change order" from the restaurant.ejs, when we submit that button the query is the name: value pair 
  
  // using the EJS dynamically to change the order instead of hard coding the "asc" in the value in the restaurant.ejs
  let nextOrder = 'desc';
  

  if (order !== 'asc' && order !== 'desc') {
    order = 'asc';
  }

  if (order === 'desc') {
    nextOrder = 'asc'
  }

  //Sorting the restaurants using the .sort() method and passing an anonymous function that compares resA with resB.
  storedRestaurants.sort(function(resA,resB) {
      if (
      (order === 'asc' && resA.name > resB.name) || 
      (order === 'desc' && resB.name > resA.name) ) {
        console.log(storedRestaurants)
        // console.log(resA)
        // console.log(resB)
        return 1    // returns 1 meaning if the name is alphabetically greater than, it will sort this  from ascending -> descending
      }
      return -1     // returns -1 means not true and therefore the sort function will perform descending - > ascending 
  })

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder
  });
});

router.get("/restaurants/:id", (req, res) => {
  const restaurantID = req.params.id; // the .id comes from the :id above. if we were to have a different name say, :number, it would be req.params.number

  const storedRestaurants = resData.getStoredRestaurants();

  // Conditional segment to only show the restaurantID if it matches. The "return" in the conditional basically stops the program from continuing/ rendering further if it already
  // matches the restaurantID
  for (const index of storedRestaurants) {
    if (index.id == restaurantID) {
      return res.render("restaurants-detail", {
        restaurant: index,
        rid: restaurantID,
      }); //key:value pair. Get's passed in the restaurant-detail.ejs section. REMEMBER the value is from the for loop and the key is whatever name we want to use
      // that gets passed in the ejs.
    }
  }
  res.status(404);
  res.render("404");
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;

  // USING FUNCTIONS IN ORDER TO reduce duplicate codes in all areas.
  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.push(restaurant);

  resData.storeRestaurants(storedRestaurants);
  // The .id technically does not exist, but JS automatically creates these values if they do not exist. But this section allows us to generate numerical id's for our list items
  // everytime a new form is posted. Requires the 3rd party app "uuid"

  restaurant.id = UID.v4();

  res.redirect("/confirm");
});

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

module.exports = router;
