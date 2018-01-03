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
        trackingId: config.GOOGLE_ANALYTICS_TRACKING_ID,
        anonymize: true
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: config.SITE_URL
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ]
};
