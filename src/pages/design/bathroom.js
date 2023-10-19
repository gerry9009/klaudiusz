import React from "react";

import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Image from "../../components/Image.component";

const Bathroom = ({ data, location }) => {
  const images = data.allFile.edges;
  console.log(data);

  return (
    <Layout href={location.pathname}>
      {images.map((image) => {
        // pass to the Image component image object from query
        return <Image picture={image.node} key={image.node.id} />;
      })}
    </Layout>
  );
};

export const query = graphql`
  query Images {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "bathroom" }
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

export default Bathroom;
