var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('styles', async function() {
  await gulp.src('./css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
  gulp.watch('css/styles.css', gulp.series('styles'))
});