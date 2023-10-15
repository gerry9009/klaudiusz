import React from "react";
import { Link } from "gatsby-link";

// import global style
import "../styles/global.css";

import { navbar, box } from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <main>
      <div className={navbar}>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <div className={box}>{children}</div>
      <div>Footer</div>
    </main>
  );
};

export default Layout;
