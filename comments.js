//Create web server
// Import the express library
var express = require('express');

// Create an instance of express
var app = express();

// Define a route for the root URL ('/')
app.get('/', function(req, res) {
  res.send('Hello, world!');
});

// Start the server on port 3000
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});
