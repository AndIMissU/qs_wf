var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('./src/main.js')
    .pipe(gulp.dest('./dist'))
});