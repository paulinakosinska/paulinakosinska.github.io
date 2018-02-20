var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

gulp.task("scss", function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass()) 
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
          }))
}); 

gulp.task('watch', ['browserSync'], function(){
    gulp.watch('app/scss/**/*.scss', ['scss']); 
    gulp.watch('app/index.html', browserSync.reload); 
  });

  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
  }); 

  gulp.task('images', function(){
    return gulp.src('app/img_raw/**/*.+(png|jpg)')
    .pipe(imagemin())
    .pipe(gulp.dest('app/img'))
  });