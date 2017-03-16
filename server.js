var express = require('express');
var server = express();
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var bodyParser = require('body-parser');

// Serve static files
server.use(express.static(path.join(__dirname, 'public/')));
server.use(express.static(path.join(__dirname, 'public/views/')));

// Allow parsing of JSON in request body
server.use(bodyParser.json());

server.post('/api/users/add', function(req, res){
    res.send('Not implemented');
})

server.listen(3000, function(){
    console.log('Listening on port 3000');
});