'use strict';

import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import imagemin    from 'gulp-imagemin';
import browserSync from 'browser-sync';
import config      from '../config';

gulp.task('minify-and-copy-images-to-build-directory', function() {
    return gulp.src(config.images.src)
        .pipe(gulpif(global.isProduction, imagemin()))
        .pipe(gulp.dest(config.images.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({
            stream: true,
            once: true
        })));
});