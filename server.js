const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const apiRoutes = require('./routing/apiRoutes')
const htmlRoutes = require('./routing/htmlRoutes')

app.use(express.static("./app/public"))
app.use(bodyParser.json())

app.use(htmlRoutes)
app.use(apiRoutes)

app.listen(3000, () => console.log('Express app running on port 3000'))