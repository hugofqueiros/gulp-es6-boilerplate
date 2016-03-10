import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import pngquant from 'imagemin-pngquant';
import { join } from 'path';

import browserSync from './server';
import { src, dest } from '../config';

const reload = browserSync.reload;
const p = loadPlugins();

gulp.task('images', () => {
    gulp.src(join(src, 'images', '**/*.{png,jpg,jpeg,gif,ico,svg}'))
        .pipe(p.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
            verbose: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest(join(dest, 'images')))
        .pipe(p.size({title: 'IMAGES'}))
        .pipe(reload({stream: true}));
});
