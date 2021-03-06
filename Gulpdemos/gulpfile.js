let gulp = require('gulp');
let jshint = require('gulp-jshint')
let cleanCSS = require('gulp-clean-css')
let rename = require('gulp-rename')
let sass = require('gulp-sass')
let autoprefixer = require('gulp-autoprefixer')
let sourcemaps = require('gulp-sourcemaps')
let browserify = require('browserify')
let babelify = require('babelify')
let source = require('vinyl-source-stream')
let buffer = require('vinyl-buffer')
let uglify = require('gulp-uglify')
let imagemin = require('gulp-imagemin')
// import imagemin from 'gulp-imagemin';


//gulp -g in case of error
//gulp --tasks lists all tasks
// gulp.task('task_jshint', function(done){
//     gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done();
// })

//default tasks
// gulp.task('default', function(done){
//     gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done();
// })

//create a task with new gulp ver 4
// function task_jshint(done){
//     gulp.src('js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'))
//     done();
// }
// function task_jshint1(done){
//     gulp.src('js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'))
//     done();
// }

//named task in version 4
// exports.task_jshint = task_jshint

//default task in ver 4
// exports.default = task_jshint

//export more than one task
// exports.default = gulp.series(task_jshint, task_jshint1)
// exports.default = gulp.parallel(task_jshint, task_jshint1)
// exports.both = gulp.parallel(task_jshint, task_jshint1)

//gulp minify and rename css files
// const styleSRC = './src/scss/style.css'
// const styleDEST = "./dist/css"

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST))
//     done();
// })

////////////////////////////////////////////////////////////

// gulp.task('minify-css', () => {
//     return gulp.src('./src/scss/*.css')
//       .pipe(cleanCSS({debug: true}, (details) => {
//         console.log(`${details.name}: ${details.stats.originalSize}`);
//         console.log(`${details.name}: ${details.stats.minifiedSize}`);
//       }))
//     .pipe(gulp.dest('./dist/css'));
//   });

//////////////////////////////////////////////////////////////

// //sass compile + minify + rename
// const styleSRC = './src/scss/style.scss'
// const styleDEST = "./dist/css"

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(sass({
//             outputStyle:'compressed'
//         }))
//         .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST));
//     done()
// })

//sass compile + minify + rename + autoprefixer + sourcemaps
const styleSRC = './src/scss/style.scss'
const styleDEST = "./dist/css"

gulp.task('styles', function(done){
    gulp.src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            cascade:false
        }))
        .pipe(cleanCSS())
        .pipe(rename({suffix:'.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(styleDEST))
    done()
})

//browserify
//transform babelify
//bundle
//source
//rename
//buffer
//init sourcemaps
//uglify
//write sourcemaps
//dist

let jsSRC = 'script.js'
let jsFolder = './src/js/'
let jsDEST = './dist/js/'

var jsFiles = [jsSRC]

gulp.task('js', function(done){
    jsFiles.map(function(entry){
        return browserify({
            entries:[jsFolder+entry]
        })
        .transform(babelify, {presets:['env']})
        .bundle()
        .pipe(source(entry))
        .pipe(rename({extname:".min.js"}))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps:true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(jsDEST))

    });
    done()
})

// let imgSRC = './src/images/*'
// let imgDEST = './dist/images/'

// gulp.task('image', function(done){
//     gulp.src(imgSRC)
//         .pipe(imagemin())
//         .pipe(gulp.dest(imgDEST));
//     done()
// })

var styleWatch = './src/scss/**/*.scss'
var jsWatch = './src/js/**/*.js'

gulp.task('watch', function(){
    gulp.watch(styleWatch, gulp.series('styles'))
    gulp.watch(jsWatch, gulp.parallel('js'))
})