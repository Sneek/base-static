var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

var JS_VERSION = 'app-v1.0.0RC1.js';

module.exports = function()
{
    var scripts = [
            // --> Plugins <-- //
            'vendor/jquery.js',
            'vendor/jquery-*.js',

            // --> App <-- //
            'frontend.js'
        ];

    var include = scripts.map(function(item) {
        return './lib/js/' + item;
    });

    return gulp.src(include)
        .pipe(concat(JS_VERSION))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('./lib/dist/'))
        .pipe(notify('JS compiled'));
};
