const express = require('express');

const app = express();


app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

const port = process.env.PORT || 1337;


app.listen(port);

console.log('APP IS LISTENING ON PORT', port);


