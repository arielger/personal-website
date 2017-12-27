import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import stylesVariables from "../../variables/styles.json";
/* eslint-disable jsx-a11y/anchor-is-valid */

const ArticlePreview = ({ path, title, excerpt, date }) => (
  <article>
    <h2 className="title">
      <Link to={path}>{title}</Link>
    </h2>
    <time className="date">{date}</time>
    {excerpt && <p>{excerpt}</p>}

    <style jsx>
      {`
        article {
          margin-bottom: ${stylesVariables.spacing.big};
        }

        article:last-child {
          margin-bottom: 0;
        }

        .title {
          font-size: ${stylesVariables.fontSizes.medium};
          margin-bottom: ${stylesVariables.spacing.small};
        }

        .title :global(a) {
          text-decoration: none;
        }

        .date {
          font-size: ${stylesVariables.fontSizes.generalText};
          color: ${stylesVariables.colors.lightGrey};
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
