import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import stylesVariables from "../../variables/styles.json";
/* eslint-disable jsx-a11y/anchor-is-valid */

const ArticlePreview = ({ path, title, excerpt, date }) => (
  <article className={excerpt ? "with-excerpt" : ""}>
    <Link to={path}>
      <div>
        <h2 className="title">{title}</h2>
        <time className="date">{date}</time>
        {excerpt && <p className="excerpt">{excerpt}</p>}
      </div>
    </Link>

    <style jsx>
      {`
        article {
          margin-bottom: ${stylesVariables.spacing.big};
        }

        article:hover .title {
          text-decoration: underline;
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
          color: ${stylesVariables.colors.gray[8]}
          margin-bottom: 8px;
        }

        @media ${stylesVariables.mq.medium} {
          .title {
            font-size: ${stylesVariables.fontSizes.medium};
            line-height: ${stylesVariables.lineHeights.medium};
            margin-bottom: 8px;
          }
        }

        .date {
          display: inline-block;
          font-size: ${stylesVariables.fontSizes.small};
          color: ${stylesVariables.colors.gray[5]};
        }

        .with-excerpt .date {
          margin-bottom: ${stylesVariables.spacing.small};
        }

        @media ${stylesVariables.mq.medium} {
          .date {
            font-size: ${stylesVariables.fontSizes.generalText};
          }

          .with-excerpt .date {
            margin-bottom: 24px;
          }
        }

        .excerpt {
          margin: 0;
          font-size: ${stylesVariables.fontSizes.small};
          line-height: ${stylesVariables.lineHeights.small};
          color: ${stylesVariables.colors.gray[8]}
        }

        @media ${stylesVariables.mq.medium} {
          .excerpt {
            font-size: ${stylesVariables.fontSizes.generalText};
            line-height: ${stylesVariables.lineHeights.generalText};
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
