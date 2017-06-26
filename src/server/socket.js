let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('user joined', (data) => {
    console.log('user joined', data)
  })
  socket.on('user playing', (data) => {
    console.log('user is playing', data)
  })
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});
