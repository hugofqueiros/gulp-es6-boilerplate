import gulp from 'gulp';
import gutil from 'gulp-util';
import { server, src, dest } from '../config';
//import browserSyncModule from 'browser-sync';
import { create as bsCreate } from 'browser-sync';
import { connectLogger } from 'connect-logger';

const browserSync = bsCreate();

gulp.task('server', () => {

  const opts = {
    files: {
      //src: dest + 'styles/'
      src: './dist/styles'
    },
    ui: {
      port: server.port + 1
    },
    server: {
      baseDir: dest
    },
    middleware: [require('connect-logger')()]
  };
  const serverOptions = Object.assign({}, server, opts);

  browserSync.init(serverOptions);
});

export default browserSync;
