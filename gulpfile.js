var gulp = require('./lib/js')([
    'less',
    'scripts',
    'watch'
]);

gulp.task('build', ['less', 'scripts']);
gulp.task('default', ['build', 'watch']);