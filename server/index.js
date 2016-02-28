var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('Hello Friend (:');
});

io.on('connection', function(socket) {
  console.log('new client connected');

  socket.on('push_from_banker', function(msg){
    socket.broadcast.emit('push_from_banker', msg);
    console.log(msg);
  });

  socket.on('buy_product', function(msg) {
    io.emit('buy_product', msg);
    console.log(msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
