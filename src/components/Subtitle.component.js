import React from "react";

import { subtitle } from "../styles/subtitle.module.css";

const Subtitle = ({ title }) => {
  return (
    <div className={subtitle}>
      <h2>{title}</h2>
    </div>
  );
};

export default Subtitle;
