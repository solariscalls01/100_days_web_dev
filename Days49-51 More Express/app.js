const express = require("express");
const { get } = require("http");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.urlencoded({ extended: false }));

// ---------------------------------//
// UNDERSTANDING TEMPLATING ENGINES //
//
// This section tells node where to find the files for templating. In this case since our html is in the views folder, we set this to views. The 2nd parameter needs to find the path
// that the files will be located/ connected.
app.set("views", path.join(__dirname, "views"));

// the app.set allows us to use templating in node. the first parameter is the template string to set the view engine to EJS 'view engine'.
// the 2nd parameter is the engine that we are using; in this case the ejs engine.
app.set("view engine", "ejs");

// anything that is considered a "static page that does not require any dynamic changes will require the express.static method"
// Since we need to load our CSS and JS files, we need to use this method and parameter is the folder that these files will be stored in.
app.use(express.static("public"));

// IN ORDER TO PROPERLY UTILIZE THE EJS TEMPLATE, WE NEED TO RENAME THE HTML FILES WITH THE .ejs
// ALSO NEED TO CHANGE THE app.get with res.render

// -----------------------------------//
const PORT = 3001;

// Naming convention for rending, you no longer need to assign a filepath to locate the file. Also don't need to add the extension (e.g., .html, .ejs) and only need to add
// the file name only.
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/recommend", (req, res) => {
  res.render("recommend");
});

// When adding post, the pathway apparently does not matter.
app.post("/recommend", (req, res) => {
  // the variables in here are created to read/ write data to a JSON file. The parse method automatically creates the form in readable JSON format (dictionary format)
  let dataFilePath = path.join(__dirname, "data", "restaurants.json");
  let restaurant = req.body;

  let fileData = fs.readFileSync(dataFilePath);
  const restaurantData = JSON.parse(fileData);

  const getRestaurantLength = Object.keys(restaurantData).length;

  // Push the form information into the JSON file
  restaurantData.push(restaurant);
  fs.writeFileSync(dataFilePath, JSON.stringify(restaurantData));

  // Using the redirect method to essentially take us to whatever page we want to be redirected to. In this case, after a user submits the form,
  //  we will be redirected to the confirm.html page
  res.redirect("/confirm");
});

// When using the EJS templating, the 2nd parameter in the render will be the variable along with the object that you want to pass/ replace.
app.get("/restaurants", (req, res) => {
  let dataFilePath = path.join(__dirname, "data", "restaurants.json");
  let fileData = fs.readFileSync(dataFilePath);
  const restaurantData = JSON.parse(fileData);

  // IN order to connect the restaurants object to allow looping in the restaurants.ejs section, we need to continue to add these "options" in the curly braces.
  res.render("restaurants", {
    numberofRestaurants: restaurantData.length,
    restaurants: restaurantData,
  });
});

app.get("/confirm", (req, res) => {
  res.render("confirm");
});

app.listen(PORT);
console.log("Listening on " + PORT);
