'use strict';

import gulp   from 'gulp';
import eslint from 'gulp-eslint';
import config from '../config';

gulp.task('eslint', function() {
    return gulp.src([config.scripts.src, './*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
