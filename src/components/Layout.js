import React from "react";

// import global style
import "../styles/global.css";

import { box } from "../styles/layout.module.css";
import Navbar from "./navbar";

const Layout = ({ children, href }) => {
  return (
    <main>
      <Navbar href={href} />
      <div className={box}>{children}</div>
      <div>Footer</div>
    </main>
  );
};

export default Layout;
