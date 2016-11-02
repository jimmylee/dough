import gulp from 'gulp';
import del from 'del';
import config from '../config';

gulp.task('reset-build-directory', () => {
  return del([config.buildDirectory]);
});
