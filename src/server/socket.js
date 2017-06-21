let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});
