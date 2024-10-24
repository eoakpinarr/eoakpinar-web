/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {},
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // Klasör adınız
        path: `${__dirname}/src/images/`, // Görsellerin bulunduğu dizin
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
  ],
}
