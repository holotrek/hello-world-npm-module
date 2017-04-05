var gulp = require('gulp');
var dts = require('dts-bundle');
var ts = require('gulp-typescript');
var merge = require('merge2');
var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src(['bundle', 'dist'], { read: false })
        .pipe(clean());
});

gulp.task('build', ['clean'], function() {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = gulp.src('src/**/*.ts').pipe(tsProject());
    return merge([
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js.pipe(gulp.dest('dist'))
    ]);
});

gulp.task('definitions', ['build'], function() {
    return dts.bundle({
        name: 'hello_world',
        main: 'dist/index.d.ts'
    });
});

gulp.task('default', ['definitions']);