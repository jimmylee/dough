'use strict';

const ASSET_EXTENSIONS = [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
];

const config = {
    developmentPort: 3000,
    browserSyncPort: 3001,
    sourceDirectory: './app/',
    buildDirectory: './build/',
    assetExtensions: ASSET_EXTENSIONS,

    scripts: {
        src: './app/**/*.js',
        dest: './build/js/'
    },

    images: {
        src: './app/images/**/*.{jpeg,jpg,png,gif}',
        dest: './build/images/'
    },

    fonts: {
        src: './app/fonts/**/*.{eot,otf,ttc,ttf,woff2}',
        dest: './build/fonts/'
    },

    styles: {
        src: './app/styles.entry.scss',
        watch: './app/**/*.scss',
        dest: './build/css/',
        fileName: 'main.css'
    }
};

export default config;