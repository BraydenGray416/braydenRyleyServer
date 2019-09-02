module.exports = function (grunt){

    grunt.initConfig({
      jshint: {
          files: ['server.js'],
          options: {
            esversion: 6,
              globals:{
                  jQuery: true
              }
          }
      },
      watch: {
          jsval: {
            files: ['server.js'],
            tasks: ['jshint']
          }
      }
    })

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('checkJS', ['jshint']);
  grunt.registerTask('default', ['watch']);
}
