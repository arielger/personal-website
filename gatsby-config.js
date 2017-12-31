module.exports = {
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
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    "gatsby-plugin-catch-links"
  ]
};
