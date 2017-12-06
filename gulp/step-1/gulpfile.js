var gulp = require('gulp');
// 集成 babel 编译
var babel = require('gulp-babel');
// 进行压缩
var uglify = require('gulp-uglify');
//引入cleancss
var cleanCss = require('gulp-clean-css');
//引入 concat
var concat = require('gulp-concat');

gulp.task('jsmin', function() {
  return gulp.src(['./src/js/main.js','./src/js/moon.js', './src/js/star.js'])
    .pipe(babel({presets: ['env']}))
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('cssmin', function() {
  return gulp.src(['./src/styles/btn.css', './src/styles/common.css'])
  .pipe(concat('all.min.css'))
  .pipe(cleanCss())
  .pipe(gulp.dest('./dist/css'))
});
//监听文件改变
gulp.task('watch',['jsmin', 'cssmin'], function(){
  gulp.watch('./src/js/*.js',['jsmin']);
  gulp.watch('./src/styles/*.css',['cssmin']);
});
//合并任务
gulp.task('default',['watch']);

//合并文件
