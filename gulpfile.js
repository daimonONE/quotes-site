"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './src/',
    livereload: true
  });
});
var htmlPat = './src/*.html';
var cssPat = './src/css/*.css';
var jsPat = './src/js/*.js';

gulp.task('html', function () {
//	console.log(  gulp.src('./src/*.html'));
  gulp.src(htmlPat)
    .pipe(connect.reload());
});

gulp.task('css', function () {
//	console.log(  gulp.src('./src/*.html'));
  gulp.src(cssPat)
    .pipe(connect.reload());
});

gulp.task('js', function () {
//	console.log(  gulp.src('./src/*.html'));
  gulp.src(jsPat)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch([htmlPat], ['html']);
  gulp.watch([cssPat], ['css']);  
  gulp.watch([jsPat], ['js']);    
});

gulp.task('default', ['connect', 'html', 'watch']);