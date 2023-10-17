import * as React from "react";
import Layout from "../components/Layout";

export default function Home({ location }) {
  return (
    <Layout href={location.pathname}>
      <h2>Hello world</h2>
    </Layout>
  );
}
