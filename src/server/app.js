let express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000

const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use('/', express.static('lib'))
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Ping');
});

app.get('/login', (req, res) => {
  res.sendFile('public/login.html', { 'root': __dirname })
});

app.post('/join', (req, res) => {
  let userName = req.body.username;
  res.redirect('/play');
});

app.get('/play', (req, res) => {
  res.sendFile('public/app.html', { 'root': __dirname })
});

app.listen(port, () => {
  console.log('Battleship server listens on port 4000');
});

module.exports = app;
