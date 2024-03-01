const express = require("express");
const router = express.Router();
const db = require("../data/database");

router.get("/", (req, res) => {
  res.redirect("/posts");
});

//////////////////////////////
// FETCHING DATA from SQL DB
//////////////////////////////
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

//////////////////////////////
// SECTION FOR POSTING ITEMS TO A DB
//////////////////////////////
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

//////////////////////////////
// SECTION FOR VIEWING POST
//////////////////////////////

// IN ORDER TO get the dynamic routing for the IDs, we have to use the ":". The variable after it can be whatever we want to name it. In this case since we want the id, we use id. 
router.get("/posts/:id", async (req,res) => {
  const query = `select post.*, authors.name AS author_name, authors.email AS author_email 
  from post inner join authors on post.author_id = authors.id where post.id = (?)`;

  // In order to get the ids, we want to use the req.params, which allows us to get the id value. The .params.id gets whatever parameter value. From the post-item.ejs section with the "view post"
  // We had set the ejs to get the ID value from our database, which then creates or links the :id to that specific number. We again use the req.params.(name we set in this case :id) to get that
  // specific value. Another example, if we set posts/:sid, we use req.params.sid to match.  
  // console.log(req.params.id)

  // remember, we set the array for the 2nd parameter to pair with the ? query. Using destructuring, the req.params.id gets the id result, which is from the :id at the get requests
  const [posts] = await db.query(query, [req.params.id])
  // console.log([posts[0]])

  // Using Spread Operator to break down each of the posts[0] items individually. Also creating new date objects to make it more easier to read. 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  const postData = {
    ...posts[0],
    date: posts[0].date.toISOString(),
    humanReadableDate: posts[0].date.toLocaleString('en-US', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }

  console.log(postData)

  // if the posts does not exists, we want to generate an error statement

  if (!posts || posts.length === 0) {
    return res.status(404).render('404')
  }
  
  // sending our key/value pair to post-detail.ejs. 
  res.render('post-detail', {post: postData})
})

//////////////////////////////
// SECTION FOR EDITING POSTS
//////////////////////////////

router.get('/posts/:id/edit', async (req,res) => {
  const query = `
  SELECT * from post where id = ?`;

  const [post] = await db.query(query, [req.params.id])

  if (!post || post.length === 0) {
    res.status(400).render('404')
  }
  res.render('update-post', {post: post[0]})
})

// SECTION for UPDATE POST button. Now we need to "post". We generate the query again using the UPDATE SQL code syntax. We set the values to ? and in the query, each array corresponds
// to the question mark in play. 
router.post('/posts/:id/edit', async (req,res) => {
  const query = `UPDATE post SET title = ?, summary = ?, body = ? WHERE id = ?`;
  
  await db.query(query, [req.body.title, req.body.summary, req.body.content, req.params.id])

  // no need to render. Since we queried the item with the items we want to type into the new box, after clicking the update post button, it runs the 2 lines above. Afterwards , just want to
  // redirect to the posts page. 
  res.redirect('/posts')
})

//////////////////////////////
// SECTION FOR DELETING AN ITEM
//////////////////////////////

// similar to the edit, but much easier. Just run the SQL query for delete where you want to match the post id. 
router.post('/posts/:id/delete', async(req,res) => {
  await db.query(`DELETE from post where id = ?`, [req.params.id])
  res.redirect('/posts')
})

module.exports = router;
