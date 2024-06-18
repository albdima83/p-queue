module.exports = {
	parser: "@typescript-eslint/parser",
	env: { browser: true, node: true, es6: true },
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
		tsconfigRootDir: __dirname,
	},
	plugins: [
		"unicorn",
		"@typescript-eslint"
	],
	settings: {
		react: {
			version: "18.2.0",
		},
	},
};
