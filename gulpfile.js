const gulp = require('gulp');

gulp.task('default', function(){
    gulp.src(['src/**', "!**/*.ts","!**/*.tsx"])
    .pipe(gulp.dest('lib'))
})