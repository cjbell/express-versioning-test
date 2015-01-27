var express = require('express');
var app = express();

var tasks = require("./tasks/index");
var versioning = require('./middleware/versioned');

app.use(versioning());
app.use('/tasks', tasks);

var server = app.listen(3000, function () {
  console.log('Server started on port 3000');
});