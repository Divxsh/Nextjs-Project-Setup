module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "standard-with-typescript"][
		"eslint:recommended"
	],

	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	// rules: {},

	extends: "next",
	rules: {
		"react/no-unescaped-entities": "off",
		"@next/next/no-page-custom-font": "off",
	},
};
