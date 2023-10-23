import React from "react";

import { image, image_img } from "../styles/image.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ picture }) => {
  const img = getImage(picture);

  return (
    <div className={image}>
      <GatsbyImage
        image={img}
        alt={picture.relativeDirectory}
        className={image_img}
      />
    </div>
  );
};

export default Image;
