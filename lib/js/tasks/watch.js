var gulp = require('gulp');

module.exports = function()
{
    gulp.watch('./lib/js/**/*.js', ['scripts']);
    gulp.watch('./lib/less/**/*.less', ['less']);
};
