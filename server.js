var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var passport = require('passport'); 
var cors = require('cors');
var app = express();
require("./api/models/db");
require('./api/config/passport');

var angularDist=__dirname+'/dist/atn';

app.use(cors()); 
app.use(morgan("dev"));
app.use(bodyParser.json()); 
app.use(passport.initialize());
app.use(express.static(angularDist));
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

var routesApi = require('./api/routes/api');
app.use('/api',routesApi);

app.get('/', (req, res) =>  res.sendFile(angularDist+'/index.html'));