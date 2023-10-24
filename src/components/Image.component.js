import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import {
  image,
  image_img,
  image_share_bar,
  image_link,
} from "../styles/image.module.css";

import useWindowWith from "../hooks/useWindowWith";

const Image = ({ picture }) => {
  const img = getImage(picture);
  const src = picture.childImageSharp.gatsbyImageData.images.fallback.src;

  const facebookShareUrl = `https://www.facebook.com/sharer.php?u=https://klaudiusz.netlify.app${src}`;

  const width = useWindowWith();

  return (
    <div className={image}>
      <GatsbyImage
        image={img}
        src={src}
        alt={picture.base}
        className={image_img}
      />
      <div className={image_share_bar}>
        <a
          data-pgaction-redirection="0"
          target="_blank"
          rel="noopener noreferrer"
          title={picture.base}
          href={facebookShareUrl}
          className={image_link}
        >
          <FontAwesomeIcon icon={faFacebookF} /> {width < 768 ? "Share" : ""}
        </a>
        <a href={src} download className={image_link}>
          {width < 768 ? "Download" : ""} <FontAwesomeIcon icon={faAngleDown} />
        </a>
      </div>
    </div>
  );
};

export default Image;
