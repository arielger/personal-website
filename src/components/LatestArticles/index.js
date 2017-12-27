import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Separator from "../Separator";
import stylesVariables from "../../variables/styles.json";
import ArticlePreview from "../ArticlePreview";
/* eslint-disable jsx-a11y/anchor-is-valid */

const LatestArticles = ({ articles }) => (
  <section className="latest-articles">
    <div className="container">
      <div className="latest-articles-row row">
        <div className="col-8">
          <h2 className="title">Latest articles 🗞</h2>
          {articles.map(({ node }) => (
            <ArticlePreview
              key={node.frontmatter.title}
              path={node.frontmatter.path}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          ))}
          <div className="all-articles-link">
            <Link to="/articles" exact>
              See all articles <span className="arrow">{"->"}</span>
            </Link>
          </div>
        </div>
      </div>
      <Separator />
    </div>

    <style jsx>
      {`
        .latest-articles {
          padding-top: ${stylesVariables.spacing.veryBig};
        }

        .latest-articles-row {
          padding-bottom: ${stylesVariables.spacing.veryBig};
        }

        .title {
          font-size: ${stylesVariables.fontSizes.title};
          color: ${stylesVariables.colors.mediumGray};
          margin-bottom: 96px;
        }

        .all-articles-link :global(a) {
          text-decoration: none;
          font-size: ${stylesVariables.fontSizes.generalText};
          color: ${stylesVariables.colors.lightGrey};
        }

        .all-articles-link .arrow {
          display: inline-block;
          position: relative;
          transition: transform 0.2s;
          width: 30px;
        }

        .all-articles-link:hover .arrow {
          transform: translateX(15px);
        }
      `}
    </style>
  </section>
);

LatestArticles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default LatestArticles;
