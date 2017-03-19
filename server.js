var express = require('express');
var server = express();
var path = require('path');
var bodyParser = require('body-parser');

// Import custom services.
var keyService = require('./services/keyService');
var userService = require('./services/userService');

// Serve static files
server.use(express.static(path.join(__dirname, 'public/')));
server.use(express.static(path.join(__dirname, 'public/views/')));
server.use(express.static(path.join(__dirname, 'public/views/partial/')));

// Allow parsing of JSON in request body
server.use(bodyParser.json());

// Add user
server.post('/api/users/add', function(req, res){
    var username = req.body.username;
    try {
        userService.addUser(req.body);
        var key = keyService.addUserKey(username);
        res.setHeader('Content-Type', 'application/json');
        res.send({key: key});
    } catch (error) {
        res.status(500).send({ error: error.message})
    };

});

// Listen
server.listen(3000, function(){
    console.log('Listening on port 3000');
});