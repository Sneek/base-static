var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

var CSS_VERSION = 'app-v1.0.0RC1.css';


module.exports = function()
{
    return gulp.src('./lib/less/frontend.less')
        .pipe(less())
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "LESS Error"
        }))
        .pipe(rename(CSS_VERSION))
        .pipe(minifyCSS({ noAdvanced: true }))
        .pipe(gulp.dest('./lib/dist/'))
        .pipe(notify('LESS Compiled'));
};
