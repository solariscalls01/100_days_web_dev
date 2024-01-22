const express = require ('express')
const app = express()
app.use(express.urlencoded())

const PORT = 3001


app.listen(PORT)

console.log('Listening on ' + PORT)