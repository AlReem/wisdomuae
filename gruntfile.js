module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: 'scss/*.scss',
				// tasks: ['compass'/*,'sass'*/],
				options: {
			    	livereload: 35729
			    }
			},
			html: {
				files: '**/*.html',
				options: {
			    	livereload: 35729
			    }
			},
			php: {
				files: '*.php',
				options: {
					livereload: 35729
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}