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
	gulp.src('app/tmp', {read: false})
		.pipe(clean());
});
```
Option read false prevents gulp to read the contents of the file and makes this task a lot faster.

After using gulp-clean the stream still contains the app/tmp and it can be used i.e. for moving the content to different location.

```js
var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('default', function() {
	gulp.src('app/tmp/index.js', {read: false})
		.pipe(clean({force: true}));
		.pipe(gulp.dest('dist'));
});
```

#### For safety files and folders outside the current working directory can be removed only with option force set to true.

## Changelog

This Changelog follows [Semantic Versioning](http://semver.org).

* **0.2.0**
	  * Support for option force, to allow removing files and folders outside the current working directory.
	  * Fixed a bug, which made it possible to remove files/folders starting with the project's name to be removed outside the current working directory.
* **0.1.3**
	  * Improved documentation.
	  * Rewrote tests.
* **0.1.2**
	  * Improved documentation.
	  * Fixed a bug in tests.
* **0.1.1**
      * Improved documentation.
* **0.1.0**
      * Possibility to remove files and folders from given paths.
      * Don't remove current working directory.
      * Don't remove anything from outside the current working directory.

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License) @ Peter Vilja
