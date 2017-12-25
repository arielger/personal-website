import React from "react";
import Helmet from "react-helmet";

const ArticleTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <main>
      <Helmet title={`${post.frontmatter.title} - Ariel Gerstein`} />
      <div className="container">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </main>
  );
};

export const pageQuery = graphql`
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default ArticleTemplate;
