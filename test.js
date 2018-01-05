const testsContext = require.context('./lib', true, /\.spec\.ts$/)
testsContext.keys().forEach(testsContext)
