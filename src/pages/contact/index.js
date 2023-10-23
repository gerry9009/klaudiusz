import React from "react";
import Layout from "../../components/Layout";
import { pages } from "../../styles/pages.module.css";
import Contact from "../../components/contact.component";

const ContactPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className={pages}>
        <Contact />
      </div>
    </Layout>
  );
};

export default ContactPage;
