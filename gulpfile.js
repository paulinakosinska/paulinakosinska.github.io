var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminMozpng = require('imagemin-pngquant');
const webp = require('gulp-webp');

gulp.task("scss", function () {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync'], function () {
  gulp.watch('app/scss/**/*.scss', ['scss']);
  gulp.watch('app/index.html', browserSync.reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('images', function () {
  return gulp.src('app/img_raw/**/*.+(png|jpg|svg)')
    .pipe(imagemin([
      imageminMozjpeg({
        quality: 60
      }),
      imageminMozpng({
        quality: 90
      })
    ]))
    .pipe(gulp.dest('app/img'))
});