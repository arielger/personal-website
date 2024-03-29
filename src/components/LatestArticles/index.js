import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Separator from "../Separator";
import stylesVariables from "../../variables/styles.json";
import ArticlePreview from "../ArticlePreview";
/* eslint-disable jsx-a11y/anchor-is-valid */

const LatestArticles = ({ articles }) => (
  <section className="latest-articles">
    <div className="container">
      <div className="latest-articles-row row">
        <div className="col-12 col-lg-8">
          <h2 className="title">Latest articles 🗞</h2>
          <div className="articles">
            {articles.map(({ node }) => (
              <ArticlePreview
                key={node.frontmatter.title}
                path={node.frontmatter.path}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
              />
            ))}
          </div>
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
          padding-top: ${stylesVariables.spacing.big};
        }

        @media ${stylesVariables.mq.medium} {
          .latest-articles {
            padding-top: ${stylesVariables.spacing.veryBig};
          }
        }

        .latest-articles-row {
          padding-bottom: ${stylesVariables.spacing.big};
        }

        @media ${stylesVariables.mq.medium} {
          .latest-articles-row {
            padding-bottom: ${stylesVariables.spacing.veryBig};
          }
        }

        .articles {
          margin-bottom: ${stylesVariables.spacing.medium};
        }

        @media ${stylesVariables.mq.medium} {
          .articles {
            margin-bottom: ${stylesVariables.spacing.big};
          }
        }

        .title {
          font-size: ${stylesVariables.fontSizes.title};
          margin-bottom: ${stylesVariables.spacing.big};
        }

        @media ${stylesVariables.mq.medium} {
          .title {
            margin-bottom: 96px;
          }
        }

        .all-articles-link :global(a) {
          text-decoration: none;
          font-size: ${stylesVariables.fontSizes.generalText};
          color: ${stylesVariables.colors.gray[5]};
        }

        .all-articles-link .arrow {
          margin-left: 5px;
          display: inline-block;
          position: relative;
          transition: transform 0.3s;
          width: 30px;
        }

        .all-articles-link:hover .arrow {
          transform: translateX(5px);
        }
      `}
    </style>
  </section>
);

LatestArticles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default LatestArticles;
