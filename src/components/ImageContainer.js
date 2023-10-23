import React from "react";
import Image from "./Image.component";
import { v4 as uuidv4 } from "uuid";

import {
  image_container,
  image_column,
} from "../styles/imageContainer.module.css";
import useWindowWith from "../hooks/useWindowWith";

const ImageContainer = ({ images }) => {
  const windowWith = useWindowWith();

  const getImages = (images) => {
    const Images = images.map((image) => {
      // pass to the Image component image object from query
      return <Image picture={image.node} key={uuidv4()} />;
    });

    return Images;
  };

  const SmallWindow = () => {
    const Images = getImages(images);

    return Images;
  };

  const MediumWindow = () => {
    const limes = Math.ceil(images.length / 2);

    const FirstColumnItems = images.slice(0, limes);
    const SecondColumnItems = images.slice(limes);

    const FirstColumn = getImages(FirstColumnItems);
    const SecondColumn = getImages(SecondColumnItems);

    return (
      <>
        <div className={image_column}>{FirstColumn}</div>
        <div className={image_column}>{SecondColumn}</div>
      </>
    );
  };

  const LargeWindow = () => {
    const limes = Math.ceil(images.length / 3);

    const FirstColumnItems = images.slice(0, limes);
    const SecondColumnItems = images.slice(limes, limes * 2);
    const ThirdColumnItems = images.slice(limes * 2);

    const FirstColumn = getImages(FirstColumnItems);
    const SecondColumn = getImages(SecondColumnItems);
    const ThirdColumn = getImages(ThirdColumnItems);

    return (
      <>
        <div className={image_column}>{FirstColumn}</div>
        <div className={image_column}>{SecondColumn}</div>
        <div className={image_column}>{ThirdColumn}</div>
      </>
    );
  };

  const ChangeLayout = () => {
    if (windowWith > 992) {
      return <LargeWindow />;
    } else if (windowWith > 768) {
      return <MediumWindow />;
    } else {
      return <SmallWindow />;
    }
  };

  return (
    <div className={image_container}>
      <ChangeLayout />
    </div>
  );
};

export default ImageContainer;
