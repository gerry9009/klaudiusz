import React from "react";

import { image } from "../styles/image.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ picture }) => {
  const img = getImage(picture);

  return (
    <div className={image}>
      <GatsbyImage image={img} alt={picture.relativeDirectory} />
    </div>
  );
};

export default Image;
