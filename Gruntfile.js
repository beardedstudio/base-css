module.exports = function(grunt) {

  grunt.initConfig({
    wiredep: {
      task: {
        src: [
          'assets/stylesheets/main.scss',
        ],
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('default');
};
