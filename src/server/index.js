let express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000
const publicPath = ''

app.use('/', express.static('lib'))

app.get('/', (req, res) => {
  res.send('Ping');
});

app.get('/login', (req, res) => {
  res.sendFile('public/login.html', { 'root': __dirname })
});

app.post('/join', (req, res) => {
  let userName = req['userName'];
});

app.listen(port, () => {
  console.log('Battleship server listens on port 4000');
});

module.exports = app;
