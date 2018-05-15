const gulp = require('gulp');
const gulpBabel = require('gulp-babel');

gulp.task("js",()=>{
  return gulp.src('src/*.js')
    .pipe(gulpBabel())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', () =>{
  gulp.watch('src/*.js',['js']);
});