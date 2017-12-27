import React from "react";
import Hero from "../components/Hero";
import LatestArticles from "../components/LatestArticles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <Hero />
      <LatestArticles articles={posts} />
      <Contact />
    </div>
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
