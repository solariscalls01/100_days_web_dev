// function created in order to reduce duplicate code in app.js. Also makes it easier to make changes without having to change the code in each and every area
// that uses these lines of code

// Moved this file originally in order to make it more globally accessible vs local variable
const path = require('path')
const fs = require("fs");

// the ".." allows us to get to the root directory. Essentially this allows us to go "up one level" from the util folder, then data, then the file name
const filePath = path.join(__dirname, "..", "data", "restaurants.json");

// function to read and parse the JSON file
function getStoredRestaurants() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

// function to write the path to JSON
function storeRestaurants(restaurant) {
  fs.writeFileSync(filePath, JSON.stringify(restaurant));
}

// In order to use these functions properly, the functions need to be exported
// REMEMBER, the "value" is the item or in this case the function name and the "key" is whatever we want to name it in order to be able to use it e.g., getStoredRestaurants. notation
module.exports = { 
    getStoredRestaurants: getStoredRestaurants, 
    storeRestaurants: storeRestaurants 
};

