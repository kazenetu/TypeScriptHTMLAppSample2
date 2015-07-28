var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');

// オプションを渡して事前にプロジェクトを作成
var typescriptProject = typescript.createProject({
  target: "ES5",
  sortOutput: true
});

gulp.task('typescript',function(){
	gulp.src(['./TypeScriptHTMLApp1/*.ts'])
		.pipe(typescript(typescriptProject))
		.pipe(typescript.filter(
		  typescriptProject
		  ,{referencedFrom: ['app.ts']}
		))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./TypeScriptHTMLApp1/'));
});

gulp.task('default',function(){
	gulp.watch('./TypeScriptHTMLApp1/*.ts',['typescript']);
});
