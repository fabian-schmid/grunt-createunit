# grunt-createunit

[![Build Status](https://travis-ci.org/fabian-schmid/grunt-createunit.svg)](https://travis-ci.org/fabian-schmid/grunt-createunit)
[![NPM Downloads](https://img.shields.io/npm/dm/grunt-createunit.svg)](https://www.npmjs.com/package/grunt-createunit)
[![NPM Version](https://img.shields.io/npm/v/grunt-createunit.svg)](https://www.npmjs.com/package/grunt-createunit)

> Create Unit-test files with base tests for QUnit and Nodeunit ...



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-createunit --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-createunit');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-clean/tree/grunt-0.3-stable).*



## Createunit task
_Run this task with the `grunt createunit` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### destination
Type: `String`

Path for write test files

#### template
Type: `String`  

Template fiele for executing unit tests

#### run_sufix
Type: `String`
Default: '_run.js'  

#### test_sufix
Type: `String`
Default: '_test.js'  

### Usage Examples

```js
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
```

> Find more project examples:
>  * [OpenCrisp BaseJS Gruntfile.js](https://github.com/OpenCrisp/Crisp.BaseJS/blob/master/Gruntfile.js)
>  * [OpenCrisp CreateJS Gruntfile.js](https://github.com/OpenCrisp/Crisp.CreateJS/blob/master/Gruntfile.js)
>  * [OpenCrisp EventJS Gruntfile.js](https://github.com/OpenCrisp/Crisp.EventJS/blob/master/Gruntfile.js)
>  * [OpenCrisp PathJS Gruntfile.js](https://github.com/OpenCrisp/Crisp.PathJS/blob/master/Gruntfile.js)

Task submitted by [Fabian Schmid](http://fabian.wca.at/)

## Links
 * [Repository](https://github.com/fabian-schmid/grunt-createunit)
 * [Node package manager](https://www.npmjs.com/package/grunt-createunit)
 * [Version monitoring](https://www.versioneye.com/nodejs/grunt-createunit)
 * [Build history](https://travis-ci.org/fabian-schmid/grunt-createunit)
