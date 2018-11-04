const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require("gulp-rename");

gulp.task('build', ['prepare-js', 'prepare-css']);

gulp.task('prepare-js', function () {
  gulp.src(['target/webapp/*.js'])
    .pipe(concat('angular.js'))
    .pipe(gulp.dest('src/main/webapp/dist'));
});

gulp.task('prepare-css', function () {
  gulp.src(['target/webapp/styles.*.css'])
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('src/main/webapp/dist'));
});

