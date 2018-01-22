var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


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