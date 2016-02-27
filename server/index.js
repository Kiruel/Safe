var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('Hello Friend (:');
});

io.on('connection', function(socket) {
  console.log('new client connected');

  socket.on('push_from_banker', function(msg){
    console.log(msg);
  });

  setTimeout(function() {
    socket.emit('message', 'lol');
  }, 300);

  socket.on('accept_from_client', function(msg) {
    console.log(msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
