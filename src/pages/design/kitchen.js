import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby-link";
import Layout from "../../components/Layout";
import ImageContainer from "../../components/ImageContainer";

import { pages } from "../../styles/pages.module.css";
import Contact from "../../components/contact.component";
import Subtitle from "../../components/Subtitle.component";

const Kitchen = ({ data, location }) => {
  const images = data.allFile.edges;

  return (
    <Layout location={location}>
      <div className={pages}>
        <h1>Konyha</h1>
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
        relativeDirectory: { eq: "kitchen" }
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

export default Kitchen;
