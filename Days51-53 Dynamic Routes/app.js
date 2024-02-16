const path = require('path');
const PORT = 3000
const express = require('express');
const app = express();

// IMPORTING our own function 

const defaultRoutes = require ('./routes/default')
const restaurantRoutes = require('./routes/restaurant')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Here, defaultRoutes is the exported router from default.js, and it's mounted on the root path ('/'). This means that all routes defined in the routes.js file will be prefixed with /.
// Think of the "/" as a filter where files named this start with the "/" 
app.use("/", defaultRoutes)
app.use("/", restaurantRoutes)

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