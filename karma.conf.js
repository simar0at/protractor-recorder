//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/socket.io/node_modules/socket.io-client/socket.io.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-sortable-view/src/angular-sortable-view.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-material/angular-material-mocks.js',
      'app/app.js',
      'app/components/**/*.js',
      'app/main/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: [],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};