import React from "react";
import Helmet from "react-helmet";

const ArticleTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <main className="article">
      <Helmet title={`${post.frontmatter.title} - Ariel Gerstein`} />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <time className="date">{post.frontmatter.date}</time>
            <h1 className="title">{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .title {
            font-size: 43px;
            line-height: 1.4em;
          }

          .article :global(img) {
            max-width: 100%;
          }
        `}
      </style>
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
