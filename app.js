var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

var routes = require('./src/routes/routes');

var app = express();
var port = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function (err, req, res, next) {
  res.status(err.status).send({ status: err.status, message: err.message });
  next();
});

app.listen(port, function () {
  console.log('now listening on port ' + port); // eslint-disable-line
});
