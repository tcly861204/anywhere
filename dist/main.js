'use strict';

require('babel-polyfill');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http2.default.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var root = '';
  if (req.url === '/') {
    root = __dirname;
  } else {
    root = __dirname + req.url;
  }
  var html = '\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          <meta http-equiv="X-UA-Compatible" content="ie=edge">\n          <title>\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668</title>\n        </head>\n        <body>\n      ';
  _util2.default.getFile(root).then(function (files) {
    files.forEach(function (el) {
      if (_util2.default.isFile(root + '/' + el)) {
        html += '<li>' + el + '</li>';
      } else if (_util2.default.isDir(root + '/' + el)) {
        html += '<li><a href="' + (req.url + (req.url.length > 2 ? '/' : '') + el) + '">' + el + '</a></li>';
      }
    });
    res.write(html);
    res.end('\n            </body>\n            </html>\n        ');
  });
}).listen(3000);