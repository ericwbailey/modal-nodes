// Dependencies
var gulp        = require('gulp'),
    autoprefix  = require('gulp-autoprefixer'),
    browsersync = require('browser-sync'),
    cssnano     = require('gulp-cssnano'),
    runSequence = require('run-sequence');
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps');


// Tasks
gulp.task('styles-dev', function() {
  return gulp.src("./source/modal-nodes.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      errLogToConsole: true
    }))
    .pipe(autoprefix())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"))
    .pipe(browsersync.stream({ match: '**/*.css' }));
});


gulp.task('styles-dist', function() {
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
  gulp.watch("./**/*.scss", ['styles-dev'])
  gulp.watch("./**/*.html", ['browsersync-reload']);
});


gulp.task('build', function(cb) {
  runSequence(
    'styles-dev',
    'browsersync'
  );
  return cb();
});
