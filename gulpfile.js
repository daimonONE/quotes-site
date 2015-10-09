"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var autopref = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

gulp.task('connect', function() {
  connect.server({
    root: './build/',
    livereload: true
  });
});
var htmlPat = './src/*.html';
var cssPat = './src/css/*.css';
var jsPat = './src/js/*.js';

var htmlDest = './build/';
var cssDest = './build/css/';
var jsDest = './build/js/';

var htmlDestPat = htmlDest+'*.html';
var cssDestPat = cssDest+'*.css';
var jsDestPat = jsDest+'*.js';;

gulp.task('html', function () {
//	console.log(  gulp.src('./src/*.html'));
  gulp.src(htmlPat)
   	.pipe(plumber())
  	.pipe(gulp.dest(htmlDest))
    .pipe(connect.reload());
});

gulp.task('css', function () {
//	console.log(  gulp.src('./src/*.html'));
  gulp.src(cssPat)
  	.pipe(plumber())
  	.pipe(autopref({
  		browsers: ['last 2 versions'],
  		cascade: false
  	}))
  	.pipe(gulp.dest(cssDest))
    .pipe(connect.reload());
});

gulp.task('js', function () {
//	console.log(  gulp.src('./src/*.html'));
  gulp.src(jsPat)
   	.pipe(plumber())
  	.pipe(gulp.dest(jsDest))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch([htmlPat], ['html']);
  gulp.watch([cssPat], ['css']);  
  gulp.watch([jsPat], ['js']);    
});

gulp.task('default', ['connect', 'html', 'css', 'js', 'watch']);