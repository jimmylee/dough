'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(config.scripts.src, [
        'eslint'
    ]);
    gulp.watch(config.styles.watch, [
        'generate-sass-and-copy-to-build-directory'
    ]);
    gulp.watch(config.images.src, [
        'minify-and-copy-images-to-build-directory'
    ]);
    gulp.watch(config.sourceDirectory + 'index.html', [
        'copy-index-html-to-build-directory'
    ]);
    gulp.watch(config.fonts.src, [
        'copy-fonts-to-build-directory'
    ]);
});