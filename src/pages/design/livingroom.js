import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ImageContainer from "../../components/ImageContainer";

import { pages } from "../../styles/pages.module.css";
import Contact from "../../components/contact.component";
import Subtitle from "../../components/Subtitle.component";
import Navigation from "../../components/Navigation.component";

const Livingroom = ({ data, location }) => {
  const images = data.allFile.edges;

  return (
    <Layout location={location}>
      <div className={pages}>
        <h1>Nappali</h1>
        <Navigation location={location} />
        <ImageContainer images={images} />
        <Navigation location={location} />
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
`;

export default Livingroom;
