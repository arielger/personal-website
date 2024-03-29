import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby"
import PageLayout from "../../components/PageLayout";
import ArticlePreview from "../../components/ArticlePreview";
import Separator from "../../components/Separator";
import stylesVariables from "../../variables/styles.json";

const ArticlesPage = ({ data, location }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <PageLayout location={location}>
      <Helmet>
        <title>Articles - Ariel Gerstein</title>
      </Helmet>
      <div className="container">
        <div className="row articles-row">
          <div className="col-12 col-lg-8">
            <div className="article-list">
              {posts.map(({ node }) => (
                <ArticlePreview
                  key={node.frontmatter.title}
                  path={node.frontmatter.path}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  excerpt={node.excerpt}
                />
              ))}
            </div>
          </div>
        </div>
        <Separator />
      </div>

      <style jsx>
        {`
          .articles-row {
            padding-top: ${stylesVariables.spacing.small};
            padding-bottom: ${stylesVariables.spacing.big};
          }

          @media ${stylesVariables.mq.medium} {
            .articles-row {
              padding-top: ${stylesVariables.spacing.medium};
              padding-bottom: ${stylesVariables.spacing.veryBig};
            }
          }
        `}
      </style>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query ArticlesPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
