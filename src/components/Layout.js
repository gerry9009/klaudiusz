import React from "react";

// import global style
import "../styles/global.css";

import {
  layout,
  overflow,
  container,
  showUp,
  showLeft,
  showDown,
  showRight,
} from "../styles/layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, location }) => {
  const animationName =
    location.pathname === "/"
      ? showLeft
      : location.pathname === "/contact/"
      ? showRight
      : location.pathname === "/about/"
      ? showDown
      : showUp;

  return (
    <main className={layout}>
      <Header href={location.pathname} />
      <div className={overflow}></div>
      <div className={`${container} ${animationName}`}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
