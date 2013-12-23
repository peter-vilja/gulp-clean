# [gulp](https://github.com/wearefractal/gulp)-clean

## Install

Install with [npm](https://npmjs.org/package/gulp-clean)

```
npm install --save-dev gulp-clean
```

## Example

```js
var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('default', function() {
	gulp.src('app/tmp')
		.pipe(clean());
});
```

After cleaning stream still contains the app/tmp and it can be used for example for moving the content to different location

## Changelog

This Changelog follows Semantic Versioning http://semver.org

* **0.1.0**
      * Possibility to clean files and folders from given paths.

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License) @ Peter Vilja