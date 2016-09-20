'use strict';

var gulp        =   require('gulp');
var sass        =   require('gulp-sass');
var prefix      =   require('gulp-autoprefixer');
var sourcemaps  =   require('gulp-sourcemaps');
var browserSync =   require('browser-sync');

var pathSASS    =   'assets/scss/*.{scss,sass}';
var pathCSS     =   'assets/css/'

gulp.task('default', ['browser-sync']);

gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        proxy: 'localhost/gulp-task'
    });

    gulp.watch(pathSASS, ['sass']);
    gulp.watch('./**/*.php').on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(pathSASS)
        .pipe(sass({ onError: browserSync.notify }))
        .pipe(prefix({ browsers: ['last 2 versions'], }))
        .pipe(gulp.dest(pathCSS))
        .pipe(browserSync.stream());
});