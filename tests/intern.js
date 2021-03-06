// Learn more about configuring this file at <https://github.com/theintern/intern/wiki/Configuring-Intern>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites.
define({
	// The port on which the instrumenting proxy will listen
	proxyPort: 9000,

	// A fully qualified URL to the Intern proxy
	proxyUrl: 'http://localhost:9000/',

	// Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
	// specified browser environments in the `environments` array below as well. See
	// https://code.google.com/p/selenium/wiki/DesiredCapabilities for standard Selenium capabilities and
	// Note that the `build` capability will be filled in with the current commit ID from the Travis CI environment
	// automatically
	capabilities: {
		'selenium-version': '2.39.0'
	},

	environments: [
		{ browserName: 'internet explorer', version: '11', platform: 'Windows' },
		{ browserName: 'internet explorer', version: '10', platform: 'Windows' },
		{ browserName: 'internet explorer', version: '9', platform: 'Windows' },
		{ browserName: 'firefox', version: '27', platform: [ 'MAC', 'Windows'] },
		{ browserName: 'chrome', version: '32', platform: [ 'MAC', 'Windows' ] },
		{ browserName: 'safari', version: '6', platform: 'MAC' },
		{ browserName: 'safari', version: '7', platform: 'MAC' }
	],

	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: 8,
	tunnel: 'BrowserStackTunnel',
  tunnelOptions: {
      verbose: true,
      username: "<username>",
	    accessKey: "<key>",
	    port: "80"
  },

	// The desired AMD loader to use when running unit tests (client.html/client.js). Omit to use the default Dojo
	// loader
	useLoader: {
		'host-node': 'dojo/dojo',
		'host-browser': 'node_modules/dojo/dojo.js'
	},

	// Configuration options for the module loader; any AMD configuration options supported by the specified AMD loader
	// can be used here
	loader: {
		// Packages that should be registered with the loader in each testing environment
		packages: [ { name: 'myPackage', location: '.' } ]
	},

	// Non-functional test suite(s) to run in each browser
	suites: [ 'myPackage/tests/hello'],

	// Functional test suite(s) to run in each browser once non-functional tests are completed
	functionalSuites: [ /* 'myPackage/tests/functional' */ ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
});
