import React from "react";

import { footer } from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={footer}>
      <p>
        Copyright <span>&copy;</span> 2023
      </p>
      <a href="https://gergobuglyo.com/">Buglyó Gergő</a>
    </footer>
  );
};

export default Footer;
