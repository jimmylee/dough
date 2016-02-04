'use strict';

import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import gutil        from 'gulp-util';
import source       from 'vinyl-source-stream';
import streamify    from 'gulp-streamify';
import sourcemaps   from 'gulp-sourcemaps';
import rename       from 'gulp-rename';
import watchify     from 'watchify';
import browserify   from 'browserify';
import babelify     from 'babelify';
import uglify       from 'gulp-uglify';
import browserSync  from 'browser-sync';
import debowerify   from 'debowerify';
import handleErrors from '../utilities/error-handler';
import config       from '../config';

function buildScript(file, watch) {
    var bundler = browserify({
        entries: [config.sourceDirectory + '' + file],
        debug: !global.isProduction,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    if ( watch ) {
        bundler = watchify(bundler);
        bundler.on('update', rebundle);
    }

    bundler.transform(babelify);
    bundler.transform(debowerify);

    function rebundle() {
        let stream = bundler.bundle();

        gutil.log('Rebuilding');

        return stream.on('error', handleErrors)
            .pipe(source(file))
            .pipe(gulpif(global.isProduction, streamify(uglify())))
            .pipe(streamify(rename({
                basename: 'main'
            })))
            .pipe(gulpif(!global.isProduction, sourcemaps.write('./')))
            .pipe(gulp.dest(config.scripts.dest))
            .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));
    }

    return rebundle();
}

gulp.task('browserify', function() {
    return buildScript('app.entry.js', !global.isProduction);
});
