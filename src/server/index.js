let express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Ping');
});

app.post('/join', (req, res) => {
  let userName = req['userName'];
});

app.listen(4000, () => {
  console.log('Battleship server listens on port 4000');
});

module.exports = app;
