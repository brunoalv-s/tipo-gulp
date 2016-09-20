'use strict';

var gulp        =   require('gulp');
var sass        =   require('gulp-sass');
var prefix      =   require('gulp-autoprefixer');
var sourcemaps  =   require('gulp-sourcemaps');
var browserSync =   require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('./assets/scss/**/*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init('./**', {
        proxy: 'localhost/gulp-task'
    });
});

gulp.task('watch', function() {
    gulp.watch('./assets/scss/**.*.{scss,sass}', ['sass']);
});

gulp.task('default', ['browser-sync', 'watch']);