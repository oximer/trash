const exec = require('child_process').exec;
const gulp = require('gulp');

gulp.task('updateGit', cb => {
  exec('git push --prune git@gitlab.com:oximer/trash.git +refs/remotes/origin/*:refs/heads/* +refs/tags/*:refs/tags/*', err => {
    console.log('updateGit', err);
    cb();
  });
});

gulp.task('teste', cb => {
  cb();
});

gulp.task('pre-commit', ['teste']);
gulp.task('post-commit', ['updateGit']);
gulp.task('post-merge', ['updateGit']);
