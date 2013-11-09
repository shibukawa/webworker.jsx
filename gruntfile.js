module.exports = function(grunt) {
  'use strict';
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    srcDir: "src",
    sampleDir: "samples",
    buildDir: "dest/src",
    libDir: "lib",
    testDir: "test",
    docDir: "doc",

    jsx: {
      doc: {
        src: ['<%= libDir %>/*.jsx', '<%= srcDir %>/*.jsx'],
        add_search_path: ['<%= libDir %>', '<%= srcDir %>'],
        dest: '<%= docDir %>',
        mode: 'doc'
      }
    }
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['jsx:doc']);
  grunt.registerTask('doc', ['jsx:doc']);
};
// vim: set expandtab tabstop=2 shiftwidth=2:
