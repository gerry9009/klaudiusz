import React from "react";

// import global style
import "../styles/global.css";

import {
  layout,
  overflow,
  container,
  showUp,
  showDown,
  showLeft,
  showRight,
} from "../styles/layout.module.css";
import Header from "./Header";

const Layout = ({ children, location }) => {
  console.log(location.pathname);

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
      <div>Footer</div>
    </main>
  );
};

export default Layout;
