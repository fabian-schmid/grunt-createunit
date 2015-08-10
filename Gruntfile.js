'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

        // Task configuration.
        clean: {
            createunit: ['test_nodeunit/*_run.js','test_qunit/*_run.html']
        },
        jshint: {
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            src: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: ['src/**/*.js']
            },
            test: {
                options: {
                    jshintrc: 'test_/.jshintrc'
                },
                src: ['test_/**/*.js']
            },
        },
        qunit: {
            files: ['test_qunit/**/*.html']
        },
        nodeunit: {
            all: ['test_nodeunit/**/*.js']
        },
        createunit: {
            nodeunit: {
                options: {
                    destination: 'test_nodeunit',
                    template: 'test_/template/nodeunit.tpl',
                    // run_sufix: '_run.js',
                    // test_sufix: '_test.js'
                },
                src: 'test_/*_test.js'
            },
            qunit: {
                options: {
                    destination: 'test_qunit',
                    template: 'test_/template/qunit.tpl',
                    run_sufix: '_run.html',
                    // test_sufix: '_test.js'
                },
                src: 'test_/*_test.js'
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.loadNpmTasks('grunt-createunit');

    grunt.registerTask('default', ['jshint', 'test']);
    grunt.registerTask('test', ['jshint:test', 'clean:createunit', 'createunit', 'nodeunit', 'qunit']);
};