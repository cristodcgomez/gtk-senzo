var gulp = require('gulp');

// Include plugins
var sass = sass = require('gulp-ruby-sass');

// Compile Our Sass
gulp.task('sass-gtk', function() {
  return gulp.src('gtk-3.0/gtk.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(gulp.dest('gtk-3.0'))
});

gulp.task('sass-shell', function() {
  return gulp.src('sass/gnome-shell.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(gulp.dest('gnome-shell'))
});

gulp.task('default', function () {
  gulp.watch('*/**.scss', ['sass-shell', 'sass-gtk']);
});
