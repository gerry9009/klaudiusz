import React from "react";

// import global style
import "../styles/global.css";

import { layout, container } from "../styles/layout.module.css";
import Header from "./Header";

const Layout = ({ children, location }) => {
  return (
    <main className={layout}>
      <Header href={location.pathname} />
      <div className={container}>{children}</div>
      <div>Footer</div>
    </main>
  );
};

export default Layout;
