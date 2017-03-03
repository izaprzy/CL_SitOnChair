//Dodany autoprefixer

var gulp = require('gulp');
var sass = require('gulp-sass');
var gplumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var errorHandler = function() {
    return gplumber(function(error) {
        console.log(error.message);
    })
};

var autoprefixerOptions = {
    browsers: ['last 10 versions', '> 1%', 'Firefox ESR']
};


gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(errorHandler())
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'expanded'}))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    return gulp.watch('scss/**/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);
 