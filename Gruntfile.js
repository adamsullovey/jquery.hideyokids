module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/jquery.<%= pkg.name %>.js',
        dest: 'build/jquery.<%= pkg.name %>.min.js'
      }
    },
    jquerymanifest: {
           options: {
               source: grunt.file.readJSON('package.json')
           }
        }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jquerymanifest');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jquerymanifest']);

};