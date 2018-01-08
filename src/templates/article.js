import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import DisqusComments from "react-disqus-comments";
import Separator from "../components/Separator";
import stylesVariables from "../variables/styles.json";
import { SITE_URL } from "../variables/config.json";

const ArticleTemplate = ({ data, pathContext: { prev, next } }) => {
  const { markdownRemark: post } = data;

  return (
    <main className="article">
      <Helmet>
        <title>{`${post.frontmatter.title} - Ariel Gerstein`}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <div className="container">
        <div className="article-row row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <time className="date">{post.frontmatter.date}</time>
            <h1 className="title">{post.frontmatter.title}</h1>
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <DisqusComments
              shortname="arielgerstein"
              identifier={post.frontmatter.path}
              title={post.frontmatter.title}
              url={`${SITE_URL}${post.frontmatter.path}`}
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
            color: ${stylesVariables.colors.gray[5]};
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

          .body :global(.gatsby-resp-image-wrapper) {
            max-width: 100%;
            margin: 2em 0;
          }

          .body :global(a) {
            font-weight: ${stylesVariables.fontWeights.medium};
            text-decoration: none;
            border-bottom: 1px solid currentColor;
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
            .body :global(pre) {
              font-size: 1em;
            }
          }

          .article :global(#disqus_thread) {
            margin-top: ${stylesVariables.spacing.big};
          }
        `}
      </style>
    </main>
  );
};

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      excerpt(pruneLength: 250)
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
