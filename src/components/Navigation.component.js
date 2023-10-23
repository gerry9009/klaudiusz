import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Link } from "gatsby-link";

import pages from "../data/pages";

import { navigation } from "../styles/navigation.module.css";

const Navigation = ({ location }) => {
  const links = pages.dropdown.filter((page) => {
    return page.path !== location.pathname;
  });

  return (
    <div className={navigation}>
      <div>
        {links.map((link) => {
          return (
            <Link to={link.path} key={uuidv4()}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
