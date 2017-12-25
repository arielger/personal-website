import React from "react";
import Link from "gatsby-link";
import Separator from "../Separator";
import stylesVariables from "../../variables/styles.json";
import ArticlePreview from "../ArticlePreview";
/* eslint-disable jsx-a11y/anchor-is-valid */

const LatestArticles = () => (
  <section className="latest-articles">
    <div className="container">
      <div className="latest-articles-row row">
        <div className="col-8">
          <h2 className="title">Latest articles 🗞</h2>
          <ArticlePreview
            title="How to deploy your static site using Gatsby, Contentful and Netlify"
            date="12/18/2017"
          />
          <ArticlePreview
            title="CDNify – An Interview with CSS Expert Harry Roberts the biggest expert of css in the world"
            date="01/05/2018"
          />
          <ArticlePreview
            title="Web Typography: Designing Tables to be Read, Not Looked At"
            date="02/06/2018"
          />
          <div className="all-articles">
            <Link to="/articles" exact>
              See all articles ->
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

        .all-articles :global(a) {
          text-decoration: none;
          font-size: ${stylesVariables.fontSizes.generalText};
          color: ${stylesVariables.colors.lightGrey};
          font-weight: ${stylesVariables.fontWeights.medium};
        }
      `}
    </style>
  </section>
);

export default LatestArticles;
