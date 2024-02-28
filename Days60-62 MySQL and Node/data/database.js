// In order to connect to the database, we first need to setup our database.js file. We can npm install mysql2, which allows us to do this.
// BECAUSE the mysql is asynchrounous the best bet is to use the "promise"


const mysql = require ('mysql2/promise')

// We create the pool to be able to connect to our database. Since we are connecting locally, this is our setup. REMINDER: the database is the schema that we want to connect to. 
const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user: 'root', 
    password: 'Succulent5-Extenuate-Destruct'
});

module.exports = pool;