import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { section, reverse } from "../styles/section.module.css";

const Section = ({ content, image, isReverse }) => {
  const img = getImage(image);

  return (
    <section className={section}>
      <div>
        <h2>{content.title}</h2>
        <p>{content.text}</p>
        {content.button && (
          <Link to={content.button.link}>{content.button.text}</Link>
        )}
      </div>
      <div className={isReverse ? reverse : undefined}>
        <GatsbyImage image={img} alt={content.title} />
      </div>
    </section>
  );
};

export default Section;
