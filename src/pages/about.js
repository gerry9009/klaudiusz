import React from "react";
import Layout from "../components/Layout";

const About = ({ location }) => {
  return (
    <Layout href={location.pathname}>
      <h2>About</h2>
    </Layout>
  );
};

export default About;
