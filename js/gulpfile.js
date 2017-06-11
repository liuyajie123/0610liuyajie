var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  jshint = require('gulp-jshint');
  //del = require('del');

gulp.task('default', function () {
  gulp.start('minifyCtrl','minifySrvc','minifycss');
});
gulp.task('minifycss', function () {
  return gulp.src(['../css/shanghai.css','../css/shuma.css','../css/Travel.css','../css/style.css'])      //ѹ�����ļ�
    .pipe(concat('main.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS())   //ִ��ѹ��
    .pipe(gulp.dest('../css'))
    .pipe(notify({messafe: 'ok!'}))
});


gulp.task('minifyCtrl', function () {
  return gulp.src('www/App/Controllers/*.js')      //��Ҫ�������ļ�
    .pipe(concat('controllers.js'))    //�ϲ�����js��main.js
    .pipe(gulp.dest('www/App'))       //������ļ���
    .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
    .pipe(uglify())    //ѹ��
    .pipe(gulp.dest('www/App'));  //���
});

gulp.task('minifySrvc', function () {
  return gulp.src('www/App/Services/*.js')      //��Ҫ�������ļ�
    .pipe(concat('services.js'))    //�ϲ�����js��main.js
    .pipe(gulp.dest('www/App'))       //������ļ���
    .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
    .pipe(uglify())    //ѹ��
    .pipe(gulp.dest('www/App'));  //���
});
