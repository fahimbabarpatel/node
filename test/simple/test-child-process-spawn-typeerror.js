// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var assert = require('assert');
var child_process = require('child_process');
var spawn = child_process.spawn;
var fork = child_process.fork;
var execFile = child_process.execFile;
var cmd = (process.platform === 'win32') ? 'dir' : 'ls';
var empty = require('../common').fixturesDir + '/empty.js';


// verify that args argument must be an array
assert.throws(function() {
  spawn(cmd, 'this is not an array');
}, TypeError);

// verify that args argument is optional
assert.doesNotThrow(function() {
  spawn(cmd, {});
});


// verify that execFile has same argument parsing behaviour as spawn
assert.throws(function() {
  execFile(cmd, 'this is not an array');
}, TypeError);

assert.doesNotThrow(function() {
  execFile(cmd, {});
});

// verify that fork has same argument parsing behaviour as spawn
assert.throws(function() {
  fork(empty, 'this is not an array');
}, TypeError);

assert.doesNotThrow(function() {
  execFile(empty, {});
});
