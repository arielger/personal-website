import React from "react";
import ArticlePreview from "../components/ArticlePreview";

const ArticlesPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <div className="container">
        <div className="article-list">
          {posts.map(({ node }) => (
            <ArticlePreview
              key={node.frontmatter.title}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              date={node.frontmatter.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
