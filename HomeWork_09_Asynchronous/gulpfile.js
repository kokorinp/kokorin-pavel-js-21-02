const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const brS = require('browser-sync').create();

gulp.task('sass', function (done){
   gulp.src('./scss/**/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('./css/'));
   done();
});

gulp.task('serv', function (){
   brS.init({
      server:{
         baseDir: './'
      },
      port: 38080
   });
   gulp.watch('./**/*').on('change', brS.reload);
});

gulp.task('sass:watch', function (){
   gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass:watch', 'serv'));