var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var tinyPNG = require('gulp-tinypng-compress');
var uglify = require('gulp-uglify');


function defaultTask(cb) {
    // place code for your default task here
    cb();
  };
  

gulp.task('move-css', function(done) {
    return gulp.src('./src/css/*.min.css')
    .pipe(gulp.dest('dist/css/'))
    done();
});
gulp.task('minify-js', function (done) {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(jsmin())
        .pipe(gulp.dest('dist/js/'));
        done();
});
gulp.task('htmlmin', function (done) {
    gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
        done();
});
gulp.task('move-fonts', function (done) {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
        done();
});
gulp.task('tinyPNG', function (done) {
    gulp.src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinyPNG({
            key: 'RlSvZTP2BVnbvcJmQdfbgGvxQx6x02R0'
        }))
        .pipe(gulp.dest('dist/img/'));
        done();
});
gulp.task('move-svg', function(done) {
    return gulp.src('./src/img/**/*.svg')
    .pipe(gulp.dest('dist/img/'))
    done();
});