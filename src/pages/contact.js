import React from "react";
import Layout from "../components/Layout";

const Contact = ({ location }) => {
  return (
    <Layout href={location.pathname}>
      <h2>Contact</h2>
    </Layout>
  );
};

export default Contact;
