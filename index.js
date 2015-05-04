'use strict';
/* jslint node: true */

var crypto = require('crypto');

function fakeUuid(plainId) {
  var hash = crypto.createHash('sha1');
  hash.update(plainId);
  var uuidData = hash.digest('hex');
  return uuidData.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
}

module.exports = fakeUuid;
