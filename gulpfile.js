var gulp = require('gulp');

gulp.task('css', function () {
  var postcss    = require('gulp-postcss');

  return gulp.src('src/styles/*.css')
    .pipe( postcss([ require('autoprefixer'), require('precss'), require('cssnano')  ]) )
    .pipe( gulp.dest('style/') );
});