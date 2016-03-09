import gulp from 'gulp';
import karma from 'karma';

const isTravis = process.env.TRAVIS || false;
const pathToKarmaConf = __dirname.replace('/gulp/tasks', '/test');

gulp.task('test', (done) => {

  console.log('path to karma', pathToKarmaConf, __dirname);

  karma.server.start({
    configFile: pathToKarmaConf + '/karma.conf.js',
    singleRun: isTravis
  }, done);
});
