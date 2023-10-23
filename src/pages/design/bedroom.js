import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Image from "../../components/Image.component";
import { pages } from "../../styles/pages.module.css";

const Bedroom = ({ data, location }) => {
  const images = data.allFile.edges;

  return (
    <Layout location={location}>
      <div className={pages}>
        <h1>Hálószoba</h1>
        {images.map((image) => {
          // pass to the Image component image object from query
          return <Image picture={image.node} key={image.node.id} />;
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Images {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "bedroom" }
      }
    ) {
      edges {
        node {
          id
          relativeDirectory
          base
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Bedroom;
