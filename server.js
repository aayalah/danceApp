
// server.js
import React from 'react'
var express = require('express')
var path = require('path')

var app = express()
// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  // match the routes to the ur
    res.send(path.join(__dirname, 'public/index.html'))
})



var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
