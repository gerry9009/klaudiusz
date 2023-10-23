import React from "react";
import Layout from "../components/Layout";
import { pages } from "../styles/pages.module.css";

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <div className={pages}>
        <h1>About</h1>
      </div>
    </Layout>
  );
};

export default About;
