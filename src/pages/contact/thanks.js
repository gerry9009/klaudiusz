import React from "react";
import { Link } from "gatsby-link";
import Layout from "../../components/Layout";
import { pages } from "../../styles/pages.module.css";

const ContactPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className={pages}>
        <h1>Köszönjük üzenetét</h1>
        <h2>
          Nemsokára felvesszük önnel a kapcsolatot a megadott elérhetőségek
          egyikén
        </h2>
        <Link to="/">Böngészek tovább</Link>
      </div>
    </Layout>
  );
};

export default ContactPage;
