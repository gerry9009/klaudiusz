import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ImageContainer from "../../components/ImageContainer";

import { pages } from "../../styles/pages.module.css";
import Contact from "../../components/contact.component";
import Subtitle from "../../components/Subtitle.component";

const Bathroom = ({ data, location }) => {
  const images = data.allFile.edges;

  return (
    <Layout location={location}>
      <div className={pages}>
        <h1>Fürdőszoba</h1>
        <ImageContainer images={images} />
        <Subtitle title="Kapcsolat" />
        <Contact />
      </div>
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
