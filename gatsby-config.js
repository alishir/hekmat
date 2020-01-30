/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * set-variable tab-width 2
 * set-variable js-indent-level 2
 */

module.exports = {
	/* Your site config here */
	pathPrefix: "/hekmat",
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/data/`,
			},
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				custom: {
					families: ["Arabic"],
					urls: ["/fonts/fonts.css"],
				},
			},
		}
	],
}