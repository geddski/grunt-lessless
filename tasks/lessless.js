/*
 * grunt-lessless
 * https://github.com/geddesign/grunt-lessless
 *
 * Copyright (c) 2012 Dave Geddes
 * Licensed under the MIT license.
 */

'use strict';
var lessless = require('lessless');

module.exports = function(grunt) {

  grunt.registerMultiTask('lessless', 'compile LESS into CSS via lessless', function() {
    //log with grunt
    lessless.setConsole({
      log: function(msg){
        grunt.log.oklns(msg);
      }
    });

    //optimize the frontend-build output by requirejs
    var done = this.async();
    // lessless.optimizeProject(grunt.config.get("requirejs.compile.options.dir"));
    lessless.optimizeProject(
      this.data.buildDir,
      this.data.styleDirs,
      this.data.stripExtensions
      );
    done();
  });

};
