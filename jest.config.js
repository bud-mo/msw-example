module.exports = {
	transform: {
		"^.+\\.js?$": ['babel-jest', { configFile: './babel.config.js' }]
	},
	moduleDirectories: [
		'node_modules',
		// add the directory with the test-utils.js file:
		'test/utils' // a utility folder
	],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.js'],
	// coverageDirectory: 'test/coverage',
	coverageReporters: ['text'],
	// testMatch: ['/test/**/*.js?(x)'],
	setupFilesAfterEnv: [
		"<rootDir>/src/jest-env-setup.js"
	],
	setupFiles: [
		"<rootDir>/src/jest-polyfills.js"
	]
};
