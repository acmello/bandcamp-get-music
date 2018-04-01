const gulp 	= require('gulp');
const mocha = require('gulp-mocha'); 

gulp.task('default', ['test']);
 
gulp.task('test', () => {
	gulp.src('./src/test/**/*.js', {read: false})
		.pipe(mocha({reporter: 'progress'}));
});