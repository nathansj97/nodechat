var express = require('express');
var server = express();
var path = require('path');
var bodyParser = require('body-parser');
var authService = require('./auth');

// Serve static files
server.use(express.static(path.join(__dirname, 'public/')));
server.use(express.static(path.join(__dirname, 'public/views/')));

// Allow parsing of JSON in request body
server.use(bodyParser.json());

server.post('/api/users/add', function(req, res){
    var username = req.body.username;
    authService.addUserKey(username);
})

server.listen(3000, function(){
    console.log('Listening on port 3000');
});