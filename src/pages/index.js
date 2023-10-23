import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby-link";
import CardList from "../components/CardList.component";

import Layout from "../components/Layout";

import {
  index,
  index_background,
  index_headline,
  index_content,
} from "../styles/index.module.css";

import pages from "../data/pages";
import Subtitle from "../components/Subtitle.component";
import Contact from "../components/contact.component";

export default function Home({ location, data }) {
  const edges = data.allFile.edges;
  // GET IMAGE FROM FOLDERS TO EACH CATEGORY

  const extendPages = pages.dropdown.map((page) => {
    // page.eng === edges.node.relativeDirectory
    let node;
    for (const edge of edges) {
      if (page.eng === edge.node.relativeDirectory) {
        node = edge.node;
        break;
      }
    }

    return { ...page, node };
  });

  return (
    <>
      <div className={index_background}></div>
      <Layout location={location}>
        <div className={index}>
          <div className={index_headline}>
            <h1>A jó dolgok kézzel készülnek</h1>
            <div>
              <Link to="/#contact">Kapcsolat</Link>
              <Link to="/#refrencia">Referencia</Link>
            </div>
          </div>
          <Subtitle title="Bútorasztalos munkák" />
          <div>Rólam</div>
          <div className={index_content} id="refrencia">
            <Subtitle title="Referenciák" />
            <CardList pages={extendPages} />

            <div id="contact">
              <Subtitle title="Kapcsolat" />
              <Contact />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query Images {
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
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
