// MORE REFACTORING RELATED TO ROUTES
// GENERALLY, the default handle's the very very basic pages
// Router is a powerful middleware that allows you to modularize and organize your routes in a separate file or files.

const express = require('express')
const router = express.Router();


router.get("/", function (req, res) {
  res.render("index");
});

router.get("/about", function (req, res) {
  res.render("about");
});

// Still need to export these files, but since we are using the router "handler" all we need to do is just export the variable we set (in this case router)
module.exports = router;