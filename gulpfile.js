const exec = require('child_process').exec;
const gulp = require('gulp');
var guppy = require('git-guppy')(gulp);

gulp.task('updateGit', cb => {
  exec('git push --prune git@gitlab.com:oximer/trash.git +refs/remotes/origin/*:refs/heads/* +refs/tags/*:refs/tags/*', err => {
    console.log('updateGit', err);
    cb();
  });
});

gulp.task('pre-commit', cb => {
  console.log('pre-commit');
  cb();
});

gulp.task('post-commit', cb => {
  console.log('post-commit');
  cb();
});

gulp.task('post-merge', cb => {
  console.log('post-merge');
  cb();
});

gulp.task('pre-commit', ['pre-commit']);
gulp.task('post-commit', ['post-commit']);
gulp.task('post-merge', ['post-merge']);
