'use strict';

import gulp   from 'gulp';
import del    from 'del';
import config from '../config';

gulp.task('reset-build-directory', function() {
    return del([config.buildDirectory]);
});
