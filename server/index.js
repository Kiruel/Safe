var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('Hello Friend (:');
});

io.on('connection', function(socket) {
  console.log('new client connected');

  socket.on('push_from_banker', function(msg){
    io.emit('push_from_banker', msg);
    console.log(msg);
  });

  socket.on('accept_from_client', function(msg) {
    io.emit('accept_from_client', msg);
    console.log(msg);
  });
  var i = 0;

  setInterval(function() {
    i++;
    io.emit('push_from_banker', 
    { id: i,
  type: 'Test'+i,
  duration: 2,
  projection: { duration: 4.5 },
  analysis: 'Analysis',
  '$$hashKey': 'object:30' });
  }, 6500);

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
