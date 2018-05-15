const gulp = require('gulp');
const gulpBabel = require('gulp-babel');
gulp.task('default', () =>
  gulp.src('src/main.js')
    .pipe(gulpBabel())
    .pipe(gulp.dest('dist'))
);