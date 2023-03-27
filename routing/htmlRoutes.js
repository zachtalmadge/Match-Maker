const express = require('express')
const htmlRoutes = express.Router()
const path = require('path')

htmlRoutes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../app/public/index.html'))
})

htmlRoutes.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname + '/../app/public/survey.html'))
})

module.exports = htmlRoutes