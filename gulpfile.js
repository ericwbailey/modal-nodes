// Dependencies
var gulp        = require('gulp'),
    autoprefix  = require('gulp-autoprefixer'),
    browsersync = require('browser-sync'),
    cssnano     = require('gulp-cssnano'),
    runSequence = require('run-sequence');
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps');


// Tasks
gulp.task('styles', function() {
  return gulp.src("./source/modal-nodes.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe(autoprefix())
    .pipe(cssnano({
      discardComments: {removeAll: true}
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"))
    .pipe(browsersync.stream({ match: '**/*.css' }));
});


gulp.task('browsersync', function() {
  browsersync.init({
  server: {
      baseDir: "./",
      index: "index.html"
    },
    minify: false,
    notify: false
  });
});


gulp.task('browsersync-reload', function() {
  browsersync.reload();
});


gulp.task('default', ['build'], function() {
  gulp.watch("./**/*.scss", ['styles'])
  gulp.watch("./**/*.html", ['browsersync-reload']);
});


gulp.task('build', function(cb) {
  runSequence(
    'styles',
    'browsersync'
  );
  return cb();
});
