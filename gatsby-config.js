const config = require("./src/variables/config.json");

module.exports = {
  siteMetadata: {
    siteUrl: config.SITE_URL
  },
  plugins: [
    "gatsby-plugin-react-next",
    "gatsby-plugin-styled-jsx",
    "@jacobmischka/gatsby-plugin-react-svg",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/articles`,
        name: "articles"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 730,
              linkImagesToOriginal: false,
              sizeByPixelDensity: false
            }
          },
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-52626121-4",
        anonymize: true
      }
    },
    "gatsby-plugin-sitemap"
  ]
};
