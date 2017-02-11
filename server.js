var express = require('express');
var os = require('os');

var app = express();
app.enable('trust proxy')

app.get('/', function(req, res) {
  var json = {};
  json.ipaddress= req.ip;
  json.language = req.acceptsLanguages()[0];
  json.software = os.type();
  
  res.json(json);
});

app.listen(3000);