# [gulp](https://github.com/wearefractal/gulp)-clean

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
