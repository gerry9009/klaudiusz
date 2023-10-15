import React from "react";
import Layout from "../../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import Image from "../../components/Image";

const Livingroom = () => {
  const data = useStaticQuery(graphql`
    query Images {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "livingroom" }
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
  `);

  const images = data.allFile.edges;

  return (
    <Layout>
      {images.map((image) => {
        // pass to the Image component image object from query
        return <Image picture={image.node} key={image.node.id} />;
      })}
    </Layout>
  );
};

export default Livingroom;
