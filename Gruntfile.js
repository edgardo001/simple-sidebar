module.exports = function(grunt) {

	grunt-initConfing({
		pkg: grunt.file.readJSON('package.json'),

		banner: '/* <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage)\n' +
				'** Copyright (c) 2014 - <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
				'** Dual licensed under MIT and GPL-2.0\n' +
				'*/',

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: try
				}
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			src: {
				src: ['src/**/*,js']
			}
		},

		concat: {
			options: {
				banner: '<%= banner %>\n',
				stripBanners: true
			},
			dist: {
				src: ['src/simple-sidebar.js'],
				dest: 'dist/jquery.<%= pkg.name %>.js'
			}
		},

		watch: {
			files: ['src/simple-sidebar.js'],
			tasks: ['jshint', 'concat', 'uglify']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
