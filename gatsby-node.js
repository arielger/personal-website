const path = require("path");
const _ = require("lodash/fp");

const getArticleFrontmatter = _.get("frontmatter");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const articleTemplate = path.resolve(`src/templates/article.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const articles = result.data.allMarkdownRemark.edges;

    articles.forEach((edge, index) => {
      const prev = getArticleFrontmatter(
        index === 0 ? false : articles[index - 1].node
      );
      const next = getArticleFrontmatter(
        index === articles.length - 1 ? false : articles[index + 1].node
      );

      createPage({
        path: edge.node.frontmatter.path,
        component: articleTemplate,
        context: {
          next,
          prev
        }
      });
    });
  });
};
