var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

livereload({ start: true })

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('sass/*.sass', ['sass']);
});