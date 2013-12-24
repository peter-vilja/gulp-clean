# [gulp](https://github.com/wearefractal/gulp)-clean [![Build Status](https://secure.travis-ci.org/peter-vilja/gulp-clean.png?branch=master)](https://travis-ci.org/peter-vilja/gulp-clean) [![NPM version](https://badge.fury.io/js/gulp-clean.png)](http://badge.fury.io/js/gulp-clean)

> Removes files and folders.

## Install

Install with [npm](https://npmjs.org/package/gulp-clean).

```
npm install --save-dev gulp-clean
```

## Example

```js
var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('default', function() {
	gulp.src(['app/tmp'])
		.pipe(clean());
});
```

After using gulp-clean the stream still contains the app/tmp and it can be used i.e. for moving the content to different location.

For safety only files and folders under the current working directory can be removed.

## Changelog

This Changelog follows [Semantic Versioning](http://semver.org).

* **0.1.1**
      * Improved documentation.
* **0.1.0**
      * Possibility to remove files and folders from given paths.
      * Don't remove current working directory.
      * Don't remove anything from outside the current working directory.

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License) @ Peter Vilja
