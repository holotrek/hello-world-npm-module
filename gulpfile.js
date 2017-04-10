var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src(['dist'], { read: false })
        .pipe(clean());
});

gulp.task('build', ['clean'], function() {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = gulp.src('src/**/*.ts').pipe(tsProject());
    return merge([
        tsResult.dts.pipe(gulp.dest('./dist')),
        tsResult.js.pipe(gulp.dest('./dist'))
    ]);
});

gulp.task('default', ['build']);