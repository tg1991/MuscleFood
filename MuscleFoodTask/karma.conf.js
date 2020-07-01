// Karma configuration
// Generated on Wed Jul 01 2020 13:36:00 GMT+0100 (British Summer Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'Specs/*.js',
            'Scripts/*.js'
        ],


        // list of files / patterns to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'dots', 'htmlDetailed', 'mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // notify karma of the available plugins
        plugins: [
            'karma-jasmine',
            'karma-ktml-detailed-reporter',
            'karma-mocha-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],

        // configure the HTML-detailed-reporter to put all results in one file
        htmlDetailed: {
            splitResults: false
        },

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
}