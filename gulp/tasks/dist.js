import gulp from 'gulp';
import sequence from 'run-sequence';

gulp.task('dist', ['clean'], (cb) => {
    sequence(
        'fonts',
        'images',
        'styles',
        'dist:replace',
        'dist:htmlmin',
        'dist:copy',
        'scripts',
        'dist:concat',
        cb);
});
