var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs = require('fs');
  r = fs.readFileSync('index.html');
  response.send(r.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
