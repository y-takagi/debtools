// Karma configuration
// Generated on Fri Jan 05 2018 16:09:00 GMT+0900 (JST)

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './test.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './test.js': ['webpack']
    },
    webpack: {
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [
          {test: /\.ts$/, use: [{loader: 'ts-loader'}]}
        ]
      }
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webpack')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          // Without a remote debugging port, Google Chrome exits immediately.
          '--remote-debugging-port=9222',
        ],
      }
    },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  })
}
