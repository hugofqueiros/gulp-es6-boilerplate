import gulp from 'gulp';
import conventionalChangelog from 'gulp-conventional-changelog';
import loadPlugins from 'gulp-load-plugins';

import { dest } from '../config';

const p = loadPlugins();

gulp.task('changelog', () => {
    return gulp.src('CHANGELOG.md')
        .pipe(conventionalChangelog({
            preset: 'angular'
        }))
        .pipe(gulp.dest('./'))
        .pipe(p.size({
            title: 'Changelog'
        }));
});

