'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copy-fonts-to-build-directory', function() {
    return gulp.src([config.sourceDirectory + 'fonts/**/*'])
        .pipe(gulp.dest(config.buildDirectory + 'fonts/'));
});
