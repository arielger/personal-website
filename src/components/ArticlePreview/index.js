import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import stylesVariables from "../../variables/styles.json";
/* eslint-disable jsx-a11y/anchor-is-valid */

const ArticlePreview = ({ path, title, excerpt, date }) => (
  <article>
    <Link to={path}>
      <h2 className="title">{title}</h2>
      <time className="date">{date}</time>
      {excerpt && <p>{excerpt}</p>}
    </Link>

    <style jsx>
      {`
        article {
          margin-bottom: ${stylesVariables.spacing.medium};
        }

        @media ${stylesVariables.mq.medium} {
          article {
            margin-bottom: ${stylesVariables.spacing.big};
          }
        }

        article :global(a) {
          text-decoration: none;
        }

        article:last-of-type {
          margin-bottom: 0;
        }

        .title {
          font-size: ${stylesVariables.fontSizes.generalText};
          line-height: ${stylesVariables.lineHeights.generalText};
          margin-bottom: 8px;
        }

        @media ${stylesVariables.mq.medium} {
          .title {
            font-size: ${stylesVariables.fontSizes.medium};
            line-height: ${stylesVariables.lineHeights.medium};
            margin-bottom: ${stylesVariables.spacing.small};
          }
        }

        .date {
          font-size: ${stylesVariables.fontSizes.small};
          color: ${stylesVariables.colors.lightGrey};
        }

        @media ${stylesVariables.mq.medium} {
          .date {
            font-size: ${stylesVariables.fontSizes.generalText};
          }
        }
      `}
    </style>
  </article>
);

ArticlePreview.defaultProps = {
  excerpt: "",
};

ArticlePreview.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default ArticlePreview;
