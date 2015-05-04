'use strict';
/* jslint node: true */
/* global describe, it */

var expect = require('expect.js');

describe('fake-uuid', function () {
  var fakeUuid = require(__dirname + '/../index');
  it('should hash a string an make a uuid from it', function () {
    expect(fakeUuid('a')).to.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
    expect(fakeUuid('a')).to.be('86f7e437-faa5-a7fc-e15d-1ddcb9eaeaea377667b8');
    expect(fakeUuid('a')).to.not.be(fakeUuid('b'));
  });

});
