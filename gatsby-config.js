const config = require("./src/variables/config.json");

module.exports = {
  siteMetadata: {
    siteUrl: config.SITE_URL,
  },
  plugins: [
    "gatsby-plugin-styled-jsx",
    {
      resolve: "gatsby-plugin-react-svg",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/articles`,
        name: "articles",
      },
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
              sizeByPixelDensity: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.GOOGLE_ANALYTICS_TRACKING_ID,
        anonymize: true,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ariel Gerstein",
        start_url: "/",
        icon: "/src/favicon.png",
      },
    },
  ],
};
