'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = {
  exists: function exists(path) {
    return _fs2.default.existsSync(path) || path.existsSync(path);
  },
  isFile: function isFile(path) {
    return util.exists(path) && _fs2.default.statSync(path).isFile();
  },
  isDir: function isDir(path) {
    return util.exists(path) && _fs2.default.statSync(path).isDirectory();
  },
  getFile: function getFile(path) {
    return new Promise(function (res, rej) {
      _fs2.default.readdir(path, function (err, files) {
        if (err) {
          rej(err);
        }
        res(files);
      });
    });
  }
};
exports.default = util;