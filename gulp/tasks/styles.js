import gulp from 'gulp';
import { join } from 'path';
import loadPlugins from 'gulp-load-plugins';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssDiscardComments from 'postcss-discard-comments';
import combiner from 'stream-combiner2';

import { src, dest, browserAutoPrefixers } from '../config';
import browserSync from './server';

const p = loadPlugins();

gulp.task('styles', () => {
  browserSync.notify('Compiling Less files... Please Wait');

  var stream = combiner.obj([
    gulp.src(join(src, 'styles', 'style.less')),
    p.sourcemaps.init(),
    p.less({
      strictMath: true,
      strictUnits: true
    }),
    p.postcss(
      [
        autoprefixer({
          //browsers: ['last 2 versions']
          browsers: browserAutoPrefixers,
          cascade: false,
          remove: false
        }),
        postcssDiscardComments({removeAll: true}),
        cssnano
      ]),
    p.sourcemaps.write('.', {includeContent: false, sourceRoot: './front_end/styles'}),
    gulp.dest(join(dest, 'styles')),
    p.size({title: 'CSS', showFiles: true}),
    p.filter('**/*.css'), // Filtering stream to only css files
    browserSync.reload({stream: true})
  ]);

  return stream;
});
