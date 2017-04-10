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

<<<<<<< HEAD
gulp.task('default', ['build']);
=======
gulp.task('definitions', ['build'], function() {
    dts.bundle({
        name: 'hello-world-npm-module',
        baseDir: 'dist',
        main: 'dist/index.d.ts',
        out: '../hello-world.d.ts',
        removeSource: true,
        outputAsModuleFolder: true,
    });
});

gulp.task('default', ['definitions']);
>>>>>>> 897f24855324133c5ecea3e01d7d3f2c445e239d
