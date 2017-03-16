var express = require('express');
var server = express();
var path = require('path');

server.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, function(){
    console.log('Listening on port 3000');
});