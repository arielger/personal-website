import React from "react";
import PageLayout from "../components/PageLayout"
import Hero from "../components/Hero";
import LatestArticles from "../components/LatestArticles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = ({ data, location }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <PageLayout location={location}>
      <Hero />
      <LatestArticles articles={posts} />
      <Contact />
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
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

export default IndexPage;
