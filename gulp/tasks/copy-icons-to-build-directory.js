import gulp from 'gulp';
import config from '../config';

gulp.task('copy-icons-to-build-directory', () => {
  return gulp.src(['./*.png', './favicon.ico'])
    .pipe(gulp.dest(config.buildDirectory));
});
