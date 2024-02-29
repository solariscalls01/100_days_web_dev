const express = require("express");
const router = express.Router();
const db = require("../data/database");

router.get("/", (req, res) => {
  res.redirect("/posts");
});

// FETCHING DATA from SQL DB
router.get("/posts", async (req, res) => {
  // We created the query variable just for ease of use. Can also be performed as before where we use db.query("... query command")
  // Because we wanted to not just get the posts items, we also wanted to join the author name as well with the posts. 
  const query = `
  SELECT post.*, authors.name AS author_name FROM blog.post 
  INNER JOIN authors on post.author_id = authors.id;`

  // We destructure the query items to be used in the posts-list.ejs file
  const [post] = await db.query(query)
  console.log(post)

  // reminder. The value in post is what we got from the const[post]. The key can be whatever we want. The {posts: post} is what allows us to use the ejs templating for the posts-list.ejs
  res.render("posts-list", {posts: post});      
});


// AFTER creating our database.js file, we need to import it. After setting up the constant for our db, we can now query our searches/ results.
// BECAUSE the db is asynchronous, best practice is to use the async and await functions.
router.get("/new-post", async (req, res) => {
  const authors = await db.query("SELECT * FROM authors");
  console.log(authors);

  // Section that allows us to create an object to be used in the "create-post" page. This allows us to connect the names from our DB to the drop-down section in the page.
  // There are a couple of ways to populate the list. If you look at the console.log output, it showcases the objects there. We index to [0] because that brings up the objects with the
  // id, name, email.

  // ANOTHER WAY to do this without indexing, is using the destructuring method. The destructuring method uses the [] within the variable name. If you console.log([name]), it produces the
  // same output as if u were doing authors[0]

  const [names] = await db.query("SELECT * FROM authors");
  console.log([names]);
  res.render("create-post", { name: names }); // remember, the key in this section can be "whatever you want it to be", and the value comes from the object or constant that we created.
});

// SECTION FOR POSTING ITEMS TO A DB
router.post("/posts", async (req, res) => {
  const body = req.body; // Will hold the incoming data
  // In order to extract the data from the input files, we gotta take the objects from the body. If you console.log, you will see that we can extract the title, summary, content, author.
  // These values come from the create-post.ejs file particularly in the forms-> name from the input

  // REMINDER, since we are POSTing, the only way to view the console is to submit the form first.

  // In order to submit data to the website from the DB, we need to first create the query and SQL command. Because we've npm installed mysql2, there's an easy way to insert the data as follows
  // We first need to get the objects for the title, summary, content, author. HAS TO BE IN THE ORDER OF THE SQL COMMAND
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
  ];

console.log(data)
  // After we have created the objects, we use the (?) for the value, followed by the [data] deconstructor format. The ? basically holds the values for the [data] array and is inserted
  // into the ? similar to --> VALUE('req.body.title', 'req.body.summary', 'req.body.content', 'req.body.author' ). HOWEVER, must be accompanied by a , after the SQL query as a second parameter.
  await db.query(
    "INSERT INTO blog.post (title, summary, body, author_id) VALUE(?);", [data]
  );
  res.redirect("/posts");
});

module.exports = router;
