const express = require('express')
const app = express()
app.use(express.static('public')) //serve our files in public statically
app.listen(5000)