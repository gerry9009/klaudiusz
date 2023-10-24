import React from "react";

import { image, image_img } from "../styles/image.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ picture }) => {
  const img = getImage(picture);
  const src = picture.childImageSharp.gatsbyImageData.images.fallback.src;

  return (
    <div className={image}>
      <GatsbyImage
        image={img}
        src={src}
        alt={picture.base}
        className={image_img}
      />
      {/* <a href={src} download>
        Download
      </a> */}
    </div>
  );
};

export default Image;
