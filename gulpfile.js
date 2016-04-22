var gulp = require('gulp');
var    exec = require('child_process').exec;

gulp.task('server', function(cb){
  exec('node index.js', function(err, stdout, stderr){
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('watch', ['server'], function() {
  gulp.watch(['./*.js'], ['test']);
});
