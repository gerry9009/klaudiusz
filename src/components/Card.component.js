import React from "react";
import { Link } from "gatsby-link";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { card, card_img } from "../styles/card.module.css";

const Card = ({ page }) => {
  const img = getImage(page.node);

  return (
    <div className={card}>
      <h3>{page.name}</h3>
      <Link to={page.path}>
        Tovább <FontAwesomeIcon icon={faAngleDown} rotation={270} />
      </Link>
      <GatsbyImage image={img} alt={page.path} className={card_img} />
    </div>
  );
};

export default Card;
