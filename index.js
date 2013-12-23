'use strict';
var rimraf = require('rimraf');
var es = require('event-stream');
var gutil = require('gulp-util');

module.exports = function () {
	return es.map(function (file, cb) {
    // Relative paths are already resolved by the gulp
    var filepath = file.path;
    var cwd = file.cwd;
    var starts = new RegExp('^' + cwd);

    // Prevent mistakes with paths
    if (starts.test(filepath) && filepath !== cwd) {
      rimraf(filepath, function (error) {
        if (!error) {
          return cb(null, file);
        } else {
          return cb(new Error('Unable to delete "' + filepath + '" file (' + error.message + ').'), file);
        }
      });
    } else if (filepath === cwd) {
      gutil.log('gulp-clean: Cannot delete current working directory. (' + filepath + ')');
      cb(null, file);
    } else {
      gutil.log('gulp-clean: Cannot delete files outside the current working directory. (' + filepath + ')');
      cb(null, file);
    }
  });
};
