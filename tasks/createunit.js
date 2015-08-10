/*
 * grunt-createunit
 * http://gruntjs.com/
 *
 * Copyright (c) 2015 Fabian Schmid, contributors
 * Licensed under the MIT license.
 */

'use strict';

var rimraf = require('rimraf');
var path = require("path");

module.exports = function(grunt) {

  function createunit(filepath, options) {
    if (!grunt.file.exists(filepath)) {
      return false;
    }

    var opt = {
        grunt: grunt.config(),
        testfile: path.join('..',filepath),
        name: path.basename( filepath, options.test_sufix )
    }

    opt.filename = path.join( options.destination, opt.name + options.run_sufix );

    grunt.log.write('Createunit ' + opt.filename + '...');

    var tpl = grunt.file.read( options.template );
    tpl = grunt.template.process( tpl, { data: opt } );

    grunt.file.write( opt.filename, tpl );
    grunt.log.ok();
  }

  grunt.registerMultiTask('createunit', 'Create nodeunit and qunit files.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      test_sufix: '_test.js',
      run_sufix: '_run.js'
    });

    // Create specified unit files.
    this.filesSrc.forEach(function(filepath) {
      createunit(filepath, options);
    });
  });

};
