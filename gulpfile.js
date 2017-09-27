const exec = require('child_process').exec;
const gulp = require('gulp');
var guppy = require('git-guppy')(gulp);

gulp.task('updateGit', cb => {
  exec('git push --prune git@gitlab.com:oximer/trash.git +refs/remotes/origin/*:refs/heads/* +refs/tags/*:refs/tags/*', err => {
    console.log('updateGit', err);
    cb();
  });
});

gulp.task('pre-commit2', cb => {
  console.log('pre-commit2');
  cb();
});

gulp.task('post-commit2', cb => {
  console.log('post-commit2');
  cb();
});

gulp.task('post-merge2', cb => {
  console.log('post-merge2');
  cb();
});

gulp.task('pre-commit', ['pre-commit2']);
gulp.task('post-commit', ['post-commit2']);
gulp.task('post-merge', ['post-merge2']);
