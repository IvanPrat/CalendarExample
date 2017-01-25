module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/css/styles.css': 'scss/styles.scss'
        }
      }
    },
    concat: {
      basic_and_extras: {
        files: {
          'dist/css/styles.css': ['bower_components/normalize.css/normalize.css', 'dist/css/styles.css'],
        },
      },
    },
    uglify: {
      target: {
        files: {
          'dist/js/functions.min.js': ['js/functions.js']
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['bower_components/handlebars/handlebars.min.js'], dest: 'dist/js', flatten: true}
        ]
      },
    }
  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'uglify', 'copy']);
};
