var express = require('express');
var router = express.Router();

function version2Handler(req, res, next) {
  if (req.apiVersion != 2) return next();
  res.send('Hi from tasks version 2');
}

function version1Handler(req, res, next) {
  res.send('Hi from tasks version 1');
}

router.get('/', version2Handler, version1Handler);

module.exports = router;