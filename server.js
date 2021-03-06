var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var http = require('http').Server(server);
var io = require('socket.io')(http);
var cors = require('cors');

// Import custom services.
var keyService = require('./services/keyService');
var userService = require('./services/userService');

// Allow parsing of JSON in request body
server.use(bodyParser.json());

// Cors configuration
var corsOptions = { origin: 'http://nodechatfrontend.azurewebsites.net', credentials: true };
server.options('*', cors());
server.use(cors(corsOptions));

// Listen for new socket connections
io.on('connection', function(socket){
    var username = socket.handshake.query.username;
    var key = socket.handshake.query.key;

    if (keyService.checkUserAuthValidity(username, key)){
        userService.attachSocket(username, socket.id);
    }

    socket.on('newChatMessage', function(message){
        // Forward incoming messages to the specified recipient

        if (keyService.checkUserAuthValidity(message.from, message.key)){
            var recipientSocket = userService.findSocketByUsername(message.recipient);
            socket.broadcast.to(recipientSocket).emit('newChatMessage', { from: message.from, message: message.message });
        }
    });

    socket.on('disconnect', function(){
        // Delete a user when they disconnect.

        socket.broadcast.emit('userDisconnected', { username: username});
        userService.deleteUser(username);
    });
});

// Clones an object
// Source: http://stackoverflow.com/questions/7574054/javascript-how-to-pass-object-by-value
function Clone(x) {
   for(p in x)
   this[p] = (typeof(x[p]) == 'object')? new Clone(x[p]) : x[p];
}

// Add user
server.post('/api/users/add', function(req, res){
    var username = req.body.username;
    try {
        userService.addUser(req.body);
        var key = keyService.addUserKey(username);
        res.setHeader('Content-Type', 'application/json');
        res.send({key: key});
    } catch (error) {
        res.status(500).send({ error: error.message });
    };
});

// Retrieve users
server.get('/api/users/getAll', function(req, res){
    var users = new Clone(userService.getAllUsers());
    for (var property in users){
        if (users.hasOwnProperty(property)){
            delete users[property].socketId;
        }
    }
    res.send({ users: users });
})

// Listen
http.listen(process.env.PORT, '0.0.0.0', function(){
    console.log('Listening on 0.0.0.0 at port 80');
});