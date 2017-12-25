import React from "react";
import PropTypes from "prop-types";
import stylesVariables from "../../variables/styles.json";

const ArticlePreview = ({ title, excerpt, date }) => (
  <article>
    <h2 className="title">{title}</h2>
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
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default ArticlePreview;
