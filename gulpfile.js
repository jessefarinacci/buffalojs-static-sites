var gulp    = require('gulp');
var shell   = require('gulp-shell');
var browser = require('browser-sync').create();

gulp.task('build', shell.task(['bundle exec jekyll build']));

gulp.task('build-watch', shell.task(['bundle exec jekyll build --config _config.yml --watch']));

gulp.task('clean', shell.task(['bundle exec jekyll clean']));

gulp.task('browser-sync-serve', function () {
    browser.init({server: {baseDir: '_site/'}});
    gulp.watch('_site/**/*.*').on('change', browser.reload);
});

gulp.task('default', ['build-watch', 'browser-sync-serve']);
