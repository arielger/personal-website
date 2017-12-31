import React from "react";
import Helmet from "react-helmet";
import Separator from "../components/Separator";
import stylesVariables from "../variables/styles.json";

const ArticleTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <main className="article">
      <Helmet title={`${post.frontmatter.title} - Ariel Gerstein`} />
      <div className="container">
        <div className="article-row row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <time className="date">{post.frontmatter.date}</time>
            <h1 className="title">{post.frontmatter.title}</h1>
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
        <Separator />
      </div>

      <style jsx>
        {`
          .article {
            padding-top: ${stylesVariables.spacing.medium};
          }

          .article-row {
            padding-bottom: ${stylesVariables.spacing.big};
          }

          @media ${stylesVariables.mq.medium} {
            .article-row {
              padding-bottom: ${stylesVariables.spacing.veryBig};
            }
          }

          .date {
            display: inline-block;
            color: ${stylesVariables.colors.lightGrey};
            margin-bottom: ${stylesVariables.spacing.small};
          }

          .title {
            font-size: ${stylesVariables.fontSizes.title};
            line-height: ${stylesVariables.lineHeights.title};
            margin-bottom: 24px;
          }

          @media ${stylesVariables.mq.medium} {
            .title {
              font-size: 43px;
              line-height: 1.4em;
              margin-bottom: ${stylesVariables.spacing.medium};
            }
          }

          .body {
            font-size: ${stylesVariables.fontSizes.generalText};
            line-height: ${stylesVariables.lineHeights.generalText};
          }

          .body :global(img) {
            max-width: 100%;
            margin: 2em 0;
          }

          .body :global(a) {
            font-weight: ${stylesVariables.fontWeights.medium};
            text-decoration: none;
            border-bottom: 1px solid currentColor;
          }

          .body :global(a:hover) {
            background-color: rgba(0, 0, 0, 0.1);
          }

          .body :global(h2) {
            margin-top: 2.5em;
            margin-bottom: 1em;
          }

          .body :global(h3) {
            margin-top: 1em;
            margin-bottom: 0.5em;
          }

          .body :global(pre) {
            margin: 1.5em 0;
            font-size: ${stylesVariables.fontSizes.small};
          }

          @media ${stylesVariables.mq.medium} {
            font-size: 1em;
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
