module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	// Added public to test images n all media things
	staticDirs: ["../public"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
};
