const { task, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

task('scss', () =>{
    return src('./src/sass/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(dest('./dist'))
    .pipe( browserSync.stream({
        reload: true
    }))
});

task('server', () =>{
    browserSync.init({
        server:{
            baseDir: './dist'
        }
    })
});


task('html', () => {
    return src('.src/index.html')
    .pipe(dest('./dist'))
});



task('watch', ['server'], () =>{
    watch('./src/sass/*.scss', ['scss'])
})




const html = task('html');
