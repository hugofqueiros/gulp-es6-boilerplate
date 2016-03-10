import gulp from 'gulp';
import { join } from 'path';
import loadPlugins from 'gulp-load-plugins';

import { dest } from '../config';

const p = loadPlugins();

gulp.task('fonts', () => {
    gulp.src(join(dest, '*.html'))
        .pipe(gulp.dest(dest))
        .pipe(p.size({ title: 'HTML MIN' }));
});
