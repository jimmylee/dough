'use strict';

import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import config      from '../config';

gulp.task('browser-sync', function() {
    const DEFAULT_FILE = 'index.html';
    const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

    browserSync.init({
        server: {
            baseDir: config.buildDirectory,
            middleware: function(req, res, next) {
                let fileHref = url.parse(req.url).href;

                if ( !ASSET_EXTENSION_REGEX.test(fileHref)) {
                    req.url = '/' + DEFAULT_FILE;
                }

                return next();
            }
        },

        port: config.developmentPort,

        ui: {
            port: config.browserSyncPort
        },

        ghostMode: {
            links: false
        }
    });
});
