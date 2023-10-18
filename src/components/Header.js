import React from "react";
import Navbar from "./navbar";

import { Link } from "gatsby-link";

import { header, logo } from "../styles/header.module.css";

const Header = ({ href }) => {
  return (
    <header className={header}>
      <Link to="/" className={logo}>
        Klaudiusz
      </Link>
      <Navbar href={href} />
    </header>
  );
};

export default Header;
