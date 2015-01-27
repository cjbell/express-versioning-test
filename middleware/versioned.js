var express = require('express');

var HEADER_NAME = 'Accept',
    HEADER_TEST = /^application\/vnd\.alfredclub\.v(\d)/;

function parseVersionHeader(header) {
  var versionNumber = header.match(HEADER_TEST);

  if (versionNumber && versionNumber.length > 0) {
    return parseInt(versionNumber[1], 10);
  } else {
    return null;
  }
}

module.exports = function() {
  return function(req, res, next) {
    var result = parseVersionHeader(req.header(HEADER_NAME));

    if (result) {
      req.apiVersion = result;
      next();
    } else {
      res.send('Invalid version number');
    }
  }
};