const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}


function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}

exports.watch = watch;

exports.default = gulp.series(styles, images, scripts);
exports.dev = gulp.series(styles, images, scripts, watch); // para rodar localmente




exports.watch = function(){
    gulp.watch ('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch ('./src/scripts/*.js', gulp.parallel(scripts))
}