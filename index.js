const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
