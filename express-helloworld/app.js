var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/home', function (req, res) {
  res.send('Hello World a new deploy!\n');
});

app.get('/versionini', function (req, res) {
  res.send('Version 1.0.0\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

