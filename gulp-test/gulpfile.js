var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

function css_style(done) {

  gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console)) /* display errors in the console*/
    .pipe(autoprefixer({
      browsers: ['last 2 version'],
      cascad: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe( gulp.dest('./css/') )
    .pipe(browserSync.stream());

  done();
}

function sync(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

function print(done) {
  console.log("Hi!");
  done();
}

function watchSass() {
  gulp.watch("./scss/**/*", css_style);
}

function watchFiles() {
  gulp.watch("./scss/**/*", css_style);
  gulp.watch("./**/*.html", browserReload);
  gulp.watch("./**/*.php", browserReload);
  gulp.watch("./**/*.js", browserReload);
}

// gulp.task(css_style);
// gulp.task(print);

gulp.task('default', gulp.parallel(sync, watchFiles));
gulp.task(sync);

// exports.default = defaultSomeTask;

