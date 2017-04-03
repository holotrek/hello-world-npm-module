var clean = require('gulp-clean');
var tsproject = require('tsproject');
var gulp = require('gulp');

gulp.task('build', function() {
    tsproject.src('./bundle_config.json')
        .pipe(gulp.dest('./bundle'));
});

gulp.task('clean', function() {
    return gulp.src(['bundle', 'dist'], { read: false })
        .pipe(clean());
});

gulp.task('default', ['build']);