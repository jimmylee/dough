'use strict';

import gulp         from 'gulp';
import fs           from 'fs';
import sass         from 'gulp-sass';
import gulpIf       from 'gulp-if';
import browserSync  from 'browser-sync';
import autoPrefixer from 'gulp-autoprefixer';
import handleErrors from '../utilities/error-handler';
import config       from '../config';
import insert       from 'gulp-insert';
import glob         from 'glob';
import rename       from 'gulp-rename';

gulp.task('generate-sass-and-copy-to-build-directory', function() {
    let allSassImports = '';

    let fileList = glob.sync('app/**/!(*.entry).scss', {});

    fileList.forEach((each) => {
        allSassImports += '@import "' + each + '";';
    });

    return gulp.src(config.styles.src)
        .pipe(insert.append(allSassImports))
        .pipe(sass({
            sourceComments: global.isProduction ? 'none' : 'map',
            sourceMap: 'sass',
            outputStyle: global.isProduction ? 'compressed' : 'nested'
        }))
        .on('error', handleErrors)
        .pipe(autoPrefixer('last 2 versions', '> 1%', 'ie 8'))
        .pipe(rename(config.styles.fileName))
        .pipe(gulp.dest(config.styles.dest))
        .pipe(gulpIf(browserSync.active, browserSync.reload({ stream: true })));
});
